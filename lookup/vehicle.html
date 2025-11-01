<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Vehicle Info (Static HTML)</title>
  <style>
    body { font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; margin: 18px; color: #0b1220; background: #f7f9fc; }
    .container { max-width: 920px; margin: 0 auto; background: #fff; padding: 18px; border-radius: 10px; box-shadow: 0 6px 18px rgba(12,20,40,0.06); }
    h1 { font-size: 20px; margin: 0 0 12px 0; }
    label { display:block; margin-top:10px; font-size:13px; color:#394a63; }
    input[type=text], input[type=url], textarea { width:100%; padding:10px; margin-top:6px; border:1px solid #e3e8ef; border-radius:8px; font-size:14px; }
    .row { display:flex; gap:10px; margin-top:12px; }
    button { padding:10px 14px; border-radius:8px; border:0; background:#0b6cff; color:#fff; cursor:pointer; font-weight:600; }
    button.secondary { background:#111927; opacity:0.9; }
    pre { background:#0b1220; color:#e6f0ff; padding:12px; border-radius:8px; overflow:auto; max-height:420px; }
    .note { font-size:13px; color:#6b7280; margin-top:8px; }
    .flex-between { display:flex; justify-content:space-between; align-items:center; gap:12px; }
    .small { font-size:13px; color:#5b6b84; }
  </style>
</head>
<body>
  <div class="container">
    <div class="flex-between">
      <h1>Vehicle Info — Static HTML (GitHub Pages)</h1>
      <div class="small">Auto pretty JSON · Download vehicle.js</div>
    </div>

    <label>Vehicle number (or use ?q=... in URL)</label>
    <input id="vehicleInput" type="text" placeholder="e.g. WB26AW3880" />

    <label>Backend URL (recommended) — If you have a server proxy put its full URL here. Example: https://your-backend.example.com/vehicle</label>
    <input id="backendUrl" type="url" placeholder="Leave empty to call RTO API directly (not secure)" />

    <label>API Key (only if calling the RTO API directly from the browser) — this will be exposed in client-side requests</label>
    <input id="apiKey" type="text" placeholder="Paste API key here only if you understand the risk" />

    <label>User-Agent (optional)</label>
    <input id="userAgent" type="text" value="Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/129.0 Mobile Safari/537.36" />

    <div class="row">
      <button id="searchBtn">Search</button>
      <button id="downloadBtn" class="secondary">Download vehicle.js</button>
      <button id="clearBtn" class="secondary">Clear Local Log</button>
    </div>

    <div class="note">CORS: If you call the RTO API directly and the server does not allow cross-origin requests, the browser request will fail. A backend proxy avoids CORS and hides your key.</div>

    <h2 style="margin-top:18px; font-size:16px;">Response</h2>
    <pre id="out">No query yet.</pre>

    <h2 style="margin-top:14px; font-size:16px;">Local Log (browser)</h2>
    <pre id="logArea">[]</pre>
  </div>

  <script>
    const qParam = new URLSearchParams(location.search).get('q');
    const vehicleInput = document.getElementById('vehicleInput');
    const backendUrlInput = document.getElementById('backendUrl');
    const apiKeyInput = document.getElementById('apiKey');
    const userAgentInput = document.getElementById('userAgent');
    const out = document.getElementById('out');
    const logArea = document.getElementById('logArea');
    const searchBtn = document.getElementById('searchBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const clearBtn = document.getElementById('clearBtn');

    function pretty(obj) {
      try { return JSON.stringify(obj, null, 2); } catch(e) { return String(obj); }
    }

    function loadLog() {
      try {
        const raw = localStorage.getItem('vehicleData');
        const arr = raw ? JSON.parse(raw) : [];
        logArea.textContent = pretty(arr);
        return arr;
      } catch(e) {
        logArea.textContent = "[]";
        return [];
      }
    }

    function saveLog(arr) {
      localStorage.setItem('vehicleData', JSON.stringify(arr));
      logArea.textContent = pretty(arr);
    }

    function appendLog(entry) {
      const arr = loadLog();
      arr.push(entry);
      saveLog(arr);
    }

    async function doSearch(vehicle) {
      vehicle = String(vehicle || '').trim();
      if (!vehicle) {
        out.textContent = pretty({ error: 'missing vehicle number' });
        return;
      }
      const backend = backendUrlInput.value.trim();
      const apiKey = apiKeyInput.value.trim();
      const userAgent = userAgentInput.value.trim() || navigator.userAgent;
      out.textContent = "Loading...";
      try {
        let resp, status;
        if (backend) {
          resp = await fetch(backend, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ vehicleId: vehicle })
          });
          status = resp.status;
        } else {
          const apiUrl = 'https://rtovehicleinfo.com/new_project/api/vehicle-info';
          const headers = {
            'Content-Type': 'application/json',
            'User-Agent': userAgent,
            'Host': 'rtovehicleinfo.com',
            'Connection': 'Keep-Alive',
            'Accept-Encoding': 'gzip'
          };
          if (apiKey) headers['x-api-key'] = apiKey;
          resp = await fetch(apiUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify({ vehicleId: vehicle })
          });
          status = resp.status;
        }
        let data;
        const ct = resp.headers.get('content-type') || '';
        if (ct.includes('application/json')) {
          data = await resp.json();
        } else {
          data = await resp.text();
        }
        out.textContent = pretty({ status, data });
        const entry = {
          vehicle: vehicle,
          ip: 'client',
          time: new Date().toISOString(),
          response: (typeof data === 'string') ? { raw: data } : data
        };
        appendLog(entry);
      } catch (err) {
        out.textContent = pretty({ error: 'request failed', details: String(err) });
      }
    }

    function downloadVehicleJs() {
      const arr = loadLog();
      const content = 'var vehicleData = ' + pretty(arr) + ';';
      const blob = new Blob([content], { type: 'application/javascript' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'vehicle.js';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    }

    searchBtn.addEventListener('click', () => doSearch(vehicleInput.value));
    downloadBtn.addEventListener('click', downloadVehicleJs);
    clearBtn.addEventListener('click', () => { localStorage.removeItem('vehicleData'); saveLog([]); });

    if (qParam) {
      vehicleInput.value = qParam;
      doSearch(qParam);
    } else {
      loadLog();
    }
  </script>
</body>
</html>
