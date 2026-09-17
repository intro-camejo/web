#!/usr/bin/env python3
"""
Coso Dockerizado — Intro Camejo (FIUBA)
Un servidor web ligero para demostrar cómo corre una aplicación aislada dentro de un contenedor Docker.
Incluye métricas del contenedor y probador de cámara web interactivo.
"""

import http.server
import socketserver
import socket
import platform
import os
import sys
import json
import time

PORT = int(os.environ.get("PORT", 8000))
START_TIME = time.time()

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Coso Dockerizado — Intro Camejo</title>
  <style>
    :root {
      --bg: #0f172a;
      --card-bg: #1e293b;
      --card-border: #334155;
      --text: #f8fafc;
      --muted: #94a3b8;
      --accent: #ff5a1f;
      --docker-blue: #0db7ed;
      --success: #22c55e;
      --code-bg: #090d16;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem 1rem;
    }
    header {
      text-align: center;
      max-width: 700px;
      margin-bottom: 2rem;
    }
    .badge {
      display: inline-block;
      background: rgba(13, 183, 237, 0.15);
      color: var(--docker-blue);
      border: 1px solid rgba(13, 183, 237, 0.3);
      padding: 0.3rem 0.8rem;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 0.8rem;
      letter-spacing: 0.05em;
    }
    h1 {
      font-size: 2.2rem;
      font-weight: 800;
      margin-bottom: 0.5rem;
      background: linear-gradient(135deg, #fff 40%, var(--docker-blue));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    header p {
      color: var(--muted);
      font-size: 1.05rem;
    }
    .container {
      width: 100%;
      max-width: 900px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
    @media (max-width: 768px) {
      .container { grid-template-columns: 1fr; }
    }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
    }
    .card h2 {
      font-size: 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #fff;
      border-bottom: 1px solid var(--card-border);
      padding-bottom: 0.75rem;
    }
    .info-list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .info-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.95rem;
    }
    .info-item .label {
      color: var(--muted);
    }
    .info-item .val {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      background: var(--code-bg);
      padding: 0.2rem 0.5rem;
      border-radius: 6px;
      border: 1px solid #1e293b;
      color: var(--docker-blue);
      max-width: 260px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .status-dot {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--success);
      margin-right: 6px;
      box-shadow: 0 0 10px var(--success);
    }
    /* Módulo de Cámara */
    .camera-area {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    video, canvas {
      width: 100%;
      max-height: 220px;
      background: #000;
      border-radius: 8px;
      border: 1px solid var(--card-border);
      object-fit: cover;
    }
    .camera-controls {
      display: flex;
      gap: 0.5rem;
      width: 100%;
    }
    button {
      flex: 1;
      background: var(--accent);
      color: white;
      border: none;
      padding: 0.6rem 1rem;
      border-radius: 6px;
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    button:hover { opacity: 0.9; }
    button.sec {
      background: var(--card-border);
      color: var(--text);
    }
    .tip-box {
      grid-column: 1 / -1;
      background: rgba(255, 90, 31, 0.08);
      border: 1px solid rgba(255, 90, 31, 0.25);
      border-radius: 10px;
      padding: 1.2rem;
      font-size: 0.95rem;
      line-height: 1.6;
    }
    .tip-box strong { color: var(--accent); }
    footer {
      margin-top: 3rem;
      color: var(--muted);
      font-size: 0.85rem;
      text-align: center;
    }
  </style>
</head>
<body>

  <header>
    <div class="badge">🐳 APLICACIÓN DOCKERIZADA</div>
    <h1>¡Hola desde el Coso Dockerizado!</h1>
    <p>Este servicio corre 100% aislado dentro de un contenedor Linux, sin requerir dependencias en la máquina anfitriona.</p>
  </header>

  <main class="container">
    <!-- Métricas del Contenedor -->
    <div class="card">
      <h2><span class="status-dot"></span> Entorno del Contenedor</h2>
      <div class="info-list">
        <div class="info-item">
          <span class="label">Container Hostname (ID)</span>
          <span class="val" title="{hostname}">{hostname}</span>
        </div>
        <div class="info-item">
          <span class="label">Sistema Operativo</span>
          <span class="val">{os_info}</span>
        </div>
        <div class="info-item">
          <span class="label">Kernel / Arquitectura</span>
          <span class="val">{machine}</span>
        </div>
        <div class="info-item">
          <span class="label">Versión de Python</span>
          <span class="val">{python_ver}</span>
        </div>
        <div class="info-item">
          <span class="label">IP interna del contenedor</span>
          <span class="val">{ip_addr}</span>
        </div>
        <div class="info-item">
          <span class="label">Tiempo activo (Uptime)</span>
          <span class="val" id="uptime">{uptime}s</span>
        </div>
      </div>
    </div>

    <!-- Módulo de Cámara Web -->
    <div class="card">
      <h2>📹 Software para Cámaras (Webcam Demo)</h2>
      <p style="font-size: 0.88rem; color: var(--muted);">
        Ejemplo de software para cámaras o videovigilancia: los servicios dockerizados procesan video en streaming sin ensuciar el host con drivers ni códecs.
      </p>
      <div class="camera-area">
        <video id="webcam" autoplay playsinline muted></video>
        <div class="camera-controls">
          <button id="btn-cam" onclick="toggleCamera()">Activar Cámara</button>
          <button id="btn-snap" class="sec" onclick="takeSnapshot()" disabled>Capturar Foto</button>
        </div>
      </div>
    </div>

    <!-- Explicación pedagógica -->
    <div class="tip-box">
      <strong>¿Por qué esto demuestra el poder de Docker?</strong><br>
      Fijate en el <code>Hostname</code> de arriba: es un identificador generado por Docker (como <code>{hostname}</code>), no el nombre de tu computadora personal. El proceso está aislado en su propio <em>namespace</em> de red y procesos, y si destruís el contenedor con <code>docker stop</code>, tu sistema operativo anfitrión queda impecable sin restos de software instalado.
    </div>
  </main>

  <footer>
    Intro Camejo — Introducción al Desarrollo de Software · FIUBA
  </footer>

  <script>
    let streaming = false;
    const video = document.getElementById('webcam');
    const btnCam = document.getElementById('btn-cam');
    const btnSnap = document.getElementById('btn-snap');

    async function toggleCamera() {
      if (!streaming) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
          video.srcObject = stream;
          streaming = true;
          btnCam.textContent = 'Detener Cámara';
          btnCam.classList.add('sec');
          btnSnap.disabled = false;
        } catch (err) {
          alert('No se pudo acceder a la cámara o no diste permiso: ' + err.message);
        }
      } else {
        const stream = video.srcObject;
        if (stream) {
          stream.getTracks().forEach(track => track.stop());
        }
        video.srcObject = null;
        streaming = false;
        btnCam.textContent = 'Activar Cámara';
        btnCam.classList.remove('sec');
        btnSnap.disabled = true;
      }
    }

    function takeSnapshot() {
      if (!streaming) return;
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0);
      const win = window.open();
      win.document.write('<h3>Captura desde el Coso Dockerizado</h3><img src="' + canvas.toDataURL() + '"/>');
    }
  </script>
</body>
</html>
"""

class CosoHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/" or self.path == "/index.html":
            hostname = socket.gethostname()
            os_info = f"{platform.system()} {platform.release()}"
            machine = f"{platform.machine()} ({platform.architecture()[0]})"
            python_ver = f"{sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}"
            
            try:
                ip_addr = socket.gethostbyname(hostname)
            except Exception:
                ip_addr = "127.0.0.1"

            uptime = int(time.time() - START_TIME)

            rendered = HTML_TEMPLATE.format(
                hostname=hostname,
                os_info=os_info,
                machine=machine,
                python_ver=python_ver,
                ip_addr=ip_addr,
                uptime=uptime
            )

            encoded = rendered.encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(encoded)))
            self.end_headers()
            self.wfile.write(encoded)
        elif self.path == "/health":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"status": "ok", "uptime": int(time.time() - START_TIME)}).encode("utf-8"))
        else:
            self.send_error(404, "No encontrado")

    def log_message(self, format, *args):
        # Mensaje de log conciso estilo servidor HTTP
        print(f"[CosoDockerizado] {self.address_string()} - {format % args}")

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), CosoHandler) as httpd:
        print(f"🚀 Coso Dockerizado escuchando en http://0.0.0.0:{PORT}...")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nApagando el Coso Dockerizado...")
            httpd.server_close()
