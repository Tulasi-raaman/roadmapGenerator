#!/usr/bin/env python3
"""
Simple HTTP server to preview SkillForge AI locally.
Run with: python server.py
"""
import http.server
import socketserver
import webbrowser
import os

PORT = 8000

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def run():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"=====================================================")
        print(f" SkillForge AI Local Server Running at:")
        print(f" http://localhost:{PORT}")
        print(f"=====================================================")
        httpd.serve_forever()

if __name__ == '__main__':
    run()
