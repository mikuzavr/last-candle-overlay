// Generated standalone OBS overlay. No credentials are embedded.
globalThis.LAST_CANDLE_ASSETS={"overlay.html":"<!doctype html><html lang=\"ru\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>Дом последней свечи • OBS</title><link rel=\"stylesheet\" href=\"/overlay.css\"></head><body><main id=\"stage\"></main><script src=\"/geometry.js\"></script><script src=\"/overlay.js\"></script></body></html>\n","overlay.css":"*{box-sizing:border-box}html,body{margin:0;width:100%;height:100%;overflow:hidden;background:transparent!important;color:#f5e8cf;font-family:Georgia,'Times New Roman',serif}#stage{width:1920px;height:1080px;position:absolute;transform-origin:top left}.zone{position:absolute;overflow:hidden}.plate{height:100%;background:linear-gradient(130deg,rgba(10,32,34,.97),rgba(9,19,22,.96));border:1px solid #7e7356;padding:22px}h2,p{margin:0}h2{font-weight:400;font-size:28px;letter-spacing:1px}.eyebrow{font:13px Arial,sans-serif;letter-spacing:3px;color:#c9aa70;margin-bottom:12px}.rooms{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:16px}.room{border:1px solid #817858;padding:12px;font-size:17px;height:65px}.room:last-child{grid-column:1/3}.unknown{border-style:dashed;opacity:.32}.fire{color:#ffc779;margin-right:7px}.candles{display:flex;justify-content:space-around;align-items:end;height:100%;padding:24px 22px 18px;background:linear-gradient(0deg,#09191bd9,transparent 80%)}.candle{width:90px;text-align:center;--flame:#f6ba63}.candle.crimson{--flame:#bf5359}.candle.violet{--flame:#a3a0f7}.flame{width:17px;height:34px;background:var(--flame);border-radius:65% 35% 55% 45%;margin:0 auto 5px;box-shadow:0 0 12px #f6ba6330}.wax{height:70px;width:25px;background:linear-gradient(90deg,#756c57,#d7c9a8,#95856b);margin:auto;border-radius:4px 4px 0 0}.candle small{display:block;font:11px Arial;margin-top:12px;color:#ded0b0}.candle.hidden{opacity:.3}.hidden .flame,.out .flame{visibility:hidden}.hidden .wax{background:#3a4c4b}.flicker .flame{animation:flicker 1.7s infinite alternate}@keyframes flicker{0%,100%{opacity:1;transform:rotate(-4deg)}35%{opacity:.6;transform:scale(.87) rotate(5deg)}70%{opacity:.9}}.card{display:flex;gap:26px;align-items:center}.card-art{width:32%;height:100%;flex-shrink:0;object-fit:contain;background:#b5aa8b;color:#2e382f;display:flex;align-items:center;justify-content:center;font-size:88px;border:8px double #6b6b53}.card-copy{flex:1}.card p{font-size:24px;line-height:1.5;margin-top:15px}.card .caption{font:14px Arial;color:#b9c7bf;margin-top:16px}.activity{padding:17px 24px}.activity h2{font-size:27px}.options{display:grid;grid-template-columns:1fr 1fr;gap:9px 26px;margin-top:16px;font:19px Arial}.option{position:relative;border-bottom:2px solid #506c67;padding-bottom:7px}.bar{position:absolute;height:2px;background:#d2ae6d;bottom:-2px;left:0}.final{display:flex;align-items:center;justify-content:center;flex-direction:column;background:#081b20f5}.final h2{font-size:64px;letter-spacing:9px}.final p{margin-top:25px;font:20px Arial;color:#b8c8c1}.layout-zone{position:absolute;border:2px dashed #c6b787;background:#173c432e;padding:17px;font:18px Arial;color:#fff9e8;text-shadow:0 1px 4px #000;pointer-events:none}.layout-zone h2{font:24px Georgia;margin-bottom:10px}.layout-zone p{line-height:1.6}.layout-zone.e{padding:0;background:none;border-color:#779b99}.layout-zone.e .legend{position:absolute;top:264px;left:740px;background:#0c2429ed;padding:16px 24px}.layout-zone.c{background:#173c4380}.layout-zone.d{background:#173c4370}.disconnect{position:absolute;left:36px;bottom:12px;font:16px Arial;background:#142c31e8;padding:9px 16px;color:#e6bc7b}\n\n.layout-zone:not(.e){background:rgba(12,36,41,.91)}.unknown{visibility:hidden}\r\n\n/* Compact candles; dimensions live in geometry.js. */\n.candles{padding:8px 6px}.candle{width:60px}.wax{height:32px;width:14px}.flame{height:18px;width:10px}.candle small{font-size:8px;margin-top:6px}\n.houses{display:flex;align-items:center;justify-content:space-evenly;width:100%;height:100%;gap:18px;padding:8px 10px}.house{display:flex;align-items:center;flex-direction:column;gap:7px;min-width:0}.house svg{width:140px;height:164px;display:block}.house span{font:16px Arial;letter-spacing:2px;color:#e6d6b6;text-shadow:0 1px 3px #000;background:#0c2429d9;padding:3px 6px}.houses.vertical{flex-direction:column;align-items:flex-start;gap:8px;padding:0}.vertical .house{align-items:flex-start;gap:3px}.vertical .house svg{width:51px;height:60px}.vertical .house span{font-size:10px;letter-spacing:1px;padding:2px 4px}\n.crest-layout{border:2px dashed #c6b787;background:#0c2429e8;padding:12px 16px;color:#fff9e8}.crest-layout-title{font:22px Georgia}.crest-layout-meta{font:15px Arial;line-height:1.4;margin-top:6px}.crest-layout.top .houses{position:absolute;left:12px;bottom:10px;width:calc(100% - 24px);height:168px;gap:12px;padding:0}.crest-layout.top .house svg{width:98px;height:116px}.crest-layout.top .house span{font-size:13px;letter-spacing:1px}.crest-layout.top .crest-layout-meta{position:absolute;right:16px;top:9px;margin:0;font-size:13px}.crest-layout.vertical{padding:8px}.crest-layout.vertical .crest-layout-title{font:16px Georgia}.crest-layout.vertical .crest-layout-meta{font:11px Arial;line-height:1.5}.crest-layout.vertical .houses{height:350px;margin-top:8px;margin-left:-10px;gap:4px}.crest-layout.vertical .house svg{width:35px;height:41px}.crest-layout.vertical .house span{font-size:9px}\n\n.layout-zone.e .legend{top:290px}.layout-zone.b{padding:10px 12px}.layout-zone.b h2{font-size:22px;margin-bottom:5px}.layout-zone.b p{font-size:14px;line-height:1.4}\n\r\n","overlay.js":"const stage=document.querySelector('#stage'),g=window.GEOMETRY;\nfunction resize(){stage.style.transform=`scale(${Math.min(innerWidth/g.width,innerHeight/g.height)})`;}addEventListener('resize',resize);resize();\nconst titles={letter:'Странное письмо',photo:'Старинная фотография',diary:'Страница дневника',door:'Дверь и следы',drawing:'Детский рисунок',book:'Архивная книга',radio:'Радиосообщение'};\nconst icons={letter:'✉',photo:'▧',diary:'≋',door:'▥',drawing:'☾',book:'▤',radio:'◉'};\nconst names=['Холл','Библиотека','Зимний сад','Верхняя галерея','Закрытый кабинет'];\nfunction zone(key,cls,html,rect){let r=rect||g[key];return `<section class=\"zone ${cls}\" style=\"left:${r.x}px;top:${r.y}px;width:${r.w}px;height:${r.h}px\">${html}</section>`;}\nlet current=null,lastSuccess=Date.now();\nfunction render(s){current=s;let html='';const crestMode=s.crests||'top',crestRect=crestMode==='vertical'?g.Fvertical:g.F;\n const shields=Array.from({length:5},(_,i)=>`<div class=\"house\"><svg viewBox=\"0 0 80 94\" aria-hidden=\"true\"><path d=\"M6 5H74V49C74 68 58 82 40 90C22 82 6 68 6 49Z\" fill=\"#102d31\" stroke=\"#b99c68\" stroke-width=\"2\"/><path d=\"M13 12H67V49C67 63 55 75 40 82C25 75 13 63 13 49Z\" fill=\"none\" stroke=\"#58716b\"/><text x=\"40\" y=\"55\" text-anchor=\"middle\" fill=\"#e6d6b6\" font-family=\"Georgia\" font-size=\"26\">${['I','II','III','IV','V'][i]}</text></svg><span>ДОМ ${i+1}</span></div>`).join('');\n if(crestMode!=='hidden')html+=zone('F',`houses ${crestMode}`,shields,crestRect);\n if(s.map)html+=zone('A','',`<div class=\"plate\"><div class=\"eyebrow\">ДОМ ПОСЛЕДНЕЙ СВЕЧИ</div><h2>План поместья</h2><div class=\"rooms\">${s.rooms.map((r,i)=>`<div class=\"room ${r?'':'unknown'}\">${r?`<span class=\"fire\">${s.candles[i].mode==='lit'||s.candles[i].mode==='flicker'?'◆':'◇'}</span>${names[i]}`:'Не исследовано'}</div>`).join('')}</div></div>`);\n html+=zone('B','',`<div class=\"candles\">${s.candles.map((c,i)=>`<div class=\"candle ${c.mode} ${c.tintUntil>Date.now()?c.color:'amber'}\"><div class=\"flame\"></div><div class=\"wax\"></div><small>${String(i+1).padStart(2,'0')} · ${c.mode==='hidden'?'НЕ НАЙДЕНА':c.mode==='out'?'ПОТУХЛА':'ОБНАРУЖЕНА'}</small></div>`).join('')}</div>`);\n if(s.card)html+=zone('C','',`<article class=\"plate card\"><div class=\"card-art\">${icons[s.card]}</div><div class=\"card-copy\"><div class=\"eyebrow\">ТЕСТОВАЯ УЛИКА · ${s.card.toUpperCase()}</div><h2>${titles[s.card]}</h2><p>${s.card==='radio'?'«Проверка связи. Это демонстрационная расшифровка радиосообщения».':'Демонстрационный материал для проверки читаемости и размещения сцены.'}</p><div class=\"caption\">${s.expanded?'Расширенный режим 1440 × 720':'Максимальная зона 960 × 320'} · без сюжетных спойлеров</div></div></article>`,s.expanded?g.expanded:undefined);\n if(s.activity){let options=['Осмотреть холл','Проверить библиотеку','Зайти в сад','Подняться наверх'];let title={question:'Куда отправимся дальше?',voting:'Голосование идёт · Куда отправимся?',results:'Итоги голосования',registration:'Розыгрыш · тест регистрации',winner:'Победитель · Тестовый зритель',reward:'Награда · Памятный ключ'}[s.activity];html+=zone('D','',`<div class=\"plate activity\"><div class=\"eyebrow\">ДЕМОНСТРАЦИЯ · БЕЗ TWITCH-ИНТЕГРАЦИИ</div><h2>${title}</h2>${['question','voting','results'].includes(s.activity)?`<div class=\"options\">${options.map((o,i)=>`<div class=\"option\">${i+1}. ${o}${s.activity==='results'?` · ${[42,28,18,12][i]}%<span class=\"bar\" style=\"width:${[42,28,18,12][i]}%\"></span>`:''}</div>`).join('')}</div>`:'<p style=\"margin-top:16px;font:20px Arial\">Тестовое состояние для размещения OBS. Действия зрителей не принимаются.</p>'}</div>`);}\n if(s.final)html+=zone('E','final','<div class=\"eyebrow\">ТОЛЬКО ДЕМОНСТРАЦИЯ</div><h2>ФИНАЛЬНАЯ СЦЕНА</h2><p>Безопасная заглушка · ручной режим</p>');\n if(s.layout){html='';for(const k of ['A','B','C','D']){let r=g[k];html+=`<div class=\"layout-zone ${k.toLowerCase()}\" style=\"left:${r.x}px;top:${r.y}px;width:${r.w}px;height:${r.h}px\"><div><h2>${k} · ${r.name}</h2><p>${r.w} × ${r.h} px · ${r.kind}<br>x ${r.x} / y ${r.y} · максимальная площадь</p>${k==='C'?'<p>Расширенный режим вручную: 1440 × 720<br>x 240 / y 180</p>':''}</div></div>`;}}\n if(s.layout&&crestMode!=='hidden'){html+=zone('F',`crest-layout ${crestMode}`,`<div class=\"crest-layout-title\">F · Гербы Домов</div><div class=\"crest-layout-meta\">${crestRect.w} × ${crestRect.h} px · постоянный<br>x ${crestRect.x} / y ${crestRect.y}</div><div class=\"houses ${crestMode}\">${shields}</div>`,crestRect);}\n if(Date.now()-lastSuccess>5000)html+='<div class=\"disconnect\">Связь прервана · сохранена последняя сцена</div>';stage.innerHTML=html;}\nconst preview=new URLSearchParams(location.search).has('preview');\nif(preview){addEventListener('message',e=>{if(e.source===parent&&e.data?.type==='preview-scene'){lastSuccess=Date.now();render(e.data.state);}});setInterval(()=>{if(current){lastSuccess=Date.now();render(current);}},1000);parent.postMessage({type:'preview-ready'},'*');}\nelse{let busy=false;async function poll(){if(busy)return;busy=true;try{let r=await fetch('/api/state',{cache:'no-store',signal:AbortSignal.timeout(4500)});if(!r.ok)throw Error();let d=await r.json();lastSuccess=Date.now();render(d.state);}catch{if(current)render(current);}finally{busy=false;}}poll();setInterval(poll,1000);}\n","geometry.js":"window.GEOMETRY={width:1920,height:1080,A:{x:36,y:36,w:414,h:336,name:'Мини-карта поместья',kind:'постоянный'},B:{x:1544,y:36,w:340,h:104,name:'Пять свечей',kind:'постоянный'},F:{x:540,y:36,w:840,h:240,name:'Гербы пяти Домов',kind:'постоянный'},Fvertical:{x:36,y:396,w:132,h:460,name:'Гербы пяти Домов',kind:'постоянный'},C:{x:480,y:396,w:960,h:320,name:'Сюжетные карточки',kind:'временный'},D:{x:488,y:854,w:944,h:182,name:'Голосования и награды',kind:'временный'},E:{x:0,y:0,w:1920,h:1080,name:'Финальная сцена',kind:'временный'},expanded:{x:240,y:180,w:1440,h:720}};\n","favicon.svg":"<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M22 19.2727C22 20.779 20.779 22 19.2727 22H14.7273C13.221 22 12 20.779 12 19.2727V12H19.2727C20.779 12 22 13.221 22 14.7273V19.2727Z\" fill=\"#68C4FF\"/>\n<path d=\"M20 2C21.1046 2 22 2.89543 22 4V7C22 8.10457 21.1046 9 20 9H17C15.8954 9 15 8.10457 15 7V4C15 2.89543 15.8954 2 17 2H20Z\" fill=\"#0C79D8\"/>\n<path d=\"M7 15C8.10457 15 9 15.8954 9 17V20C9 21.1046 8.10457 22 7 22H4C2.89543 22 2 21.1046 2 20V17C2 15.8954 2.89543 15 4 15H7Z\" fill=\"#0C79D8\"/>\n<path d=\"M12 12H4.72727C3.22104 12 2 10.779 2 9.27273V4.72727C2 3.22104 3.22104 2 4.72727 2H9.27273C10.779 2 12 3.22104 12 4.72727V12Z\" fill=\"#2E9EFF\"/>\n</svg>\n"};

// portable/server.mjs
import http from "node:http";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { timingSafeEqual } from "node:crypto";

// lib/scene.mjs
var base = () => ({ layout: true, map: true, crests: "top", rooms: [true, false, false, false, false], candles: Array.from({ length: 5 }, (_, i) => ({ mode: i ? "hidden" : "lit", color: "amber", tintUntil: 0 })), card: null, expanded: false, activity: null, final: false });
function valid(s) {
  return s && (s.crests === void 0 || ["top", "vertical", "hidden"].includes(s.crests)) && typeof s.layout === "boolean" && typeof s.map === "boolean" && typeof s.final === "boolean" && typeof s.expanded === "boolean" && Array.isArray(s.rooms) && s.rooms.length === 5 && s.rooms.every((x) => typeof x === "boolean") && Array.isArray(s.candles) && s.candles.length === 5 && s.candles.every((c) => ["lit", "flicker", "out", "hidden"].includes(c.mode) && ["amber", "crimson", "violet"].includes(c.color) && Number.isFinite(c.tintUntil)) && [null, "letter", "photo", "diary", "door", "drawing", "book", "radio"].includes(s.card) && [null, "question", "voting", "results", "registration", "winner", "reward"].includes(s.activity);
}

// portable/store.mjs
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
async function createStore(config) {
  if (config.driver === "supabase") {
    if (!config.supabaseUrl || !config.supabaseKey) throw Error("SUPABASE_URL and SUPABASE_SERVICE_KEY are required");
    const url = new URL("/rest/v1/overlay_scene", config.supabaseUrl);
    if (url.protocol !== "https:") throw Error("Supabase requires HTTPS");
    const request = async (method, query, body) => {
      const endpoint = new URL(url);
      endpoint.search = query;
      const r = await fetch(endpoint, { method, headers: { apikey: config.supabaseKey, Authorization: `Bearer ${config.supabaseKey}`, "Content-Type": "application/json", Prefer: "return=representation" }, body: body ? JSON.stringify(body) : void 0, signal: AbortSignal.timeout(8e3) });
      if (!r.ok) throw Error("State storage unavailable");
      return r.json();
    };
    let cached = null, expires = 0, inflight = null;
    return { async get() {
      if (cached && Date.now() < expires) return cached;
      if (!inflight) inflight = (async () => {
        try {
          const rows = await request("GET", "id=eq.1&select=revision,payload");
          if (rows.length !== 1) throw Error("Run Supabase schema first");
          const fresh = { revision: rows[0].revision, state: rows[0].payload };
          if (!cached || fresh.revision >= cached.revision) cached = fresh;
          expires = Date.now() + 750;
          return cached;
        } finally {
          inflight = null;
        }
      })();
      return inflight;
    }, async put(revision, state) {
      const rows = await request("PATCH", `id=eq.1&revision=eq.${revision}`, { revision: revision + 1, payload: state });
      if (!rows.length) {
        expires = 0;
        return null;
      }
      cached = { revision: rows[0].revision, state: rows[0].payload };
      expires = Date.now() + 750;
      return cached;
    }, close() {
    } };
  }
  if (config.driver !== "sqlite") throw Error("Unknown DB_DRIVER");
  const { DatabaseSync } = await import("node:sqlite");
  mkdirSync(dirname(config.file), { recursive: true });
  const db = new DatabaseSync(config.file);
  db.exec("PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000; CREATE TABLE IF NOT EXISTS scene(id INTEGER PRIMARY KEY,revision INTEGER NOT NULL,payload TEXT NOT NULL);");
  db.prepare("INSERT OR IGNORE INTO scene VALUES(1,0,?)").run(JSON.stringify(base()));
  return { async get() {
    const row = db.prepare("SELECT revision,payload FROM scene WHERE id=1").get();
    return { revision: row.revision, state: JSON.parse(row.payload) };
  }, async put(revision, state) {
    const r = db.prepare("UPDATE scene SET revision=revision+1,payload=? WHERE id=1 AND revision=?").run(JSON.stringify(state), revision);
    return r.changes ? { revision: revision + 1, state } : null;
  }, close() {
    db.close();
  } };
}

// portable/server.mjs
var publicDir = new URL("../public/", import.meta.url);
var files = { "/": "overlay.html", "/overlay": "overlay.html", "/overlay.html": "overlay.html", "/overlay.css": "overlay.css", "/overlay.js": "overlay.js", "/geometry.js": "geometry.js", "/favicon.svg": "favicon.svg" };
async function createOverlayServer(config) {
  if (typeof config.key !== "string" || config.key.length < 32) throw Error("WRITE_KEY must contain at least 32 characters");
  const expected = Buffer.from(`Bearer ${config.key}`), store = await createStore(config);
  const headers = { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff", "Referrer-Policy": "no-referrer" };
  const send = (res, status, data) => {
    res.writeHead(status, { ...headers, "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(data));
  };
  const server = http.createServer({ requestTimeout: 15e3, headersTimeout: 1e4, maxHeaderSize: 8192 }, async (req, res) => {
    try {
      const path = new URL(req.url, "http://overlay.local").pathname;
      if (path === "/healthz" && req.method === "GET") return send(res, 200, { ok: true });
      if (path === "/api/state") {
        if (req.method === "GET") return send(res, 200, await store.get());
        if (req.method !== "PUT") {
          res.setHeader("Allow", "GET, PUT");
          return send(res, 405, { error: "Method not allowed" });
        }
        const auth = Buffer.from(req.headers.authorization || "");
        if (auth.length !== expected.length || !timingSafeEqual(auth, expected)) return send(res, 401, { error: "\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430" });
        if (Number(req.headers["content-length"] || 0) > 12e3) return send(res, 413, { error: "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0437\u0430\u043F\u0440\u043E\u0441" });
        let bytes = 0, chunks = [];
        for await (const chunk of req) {
          bytes += chunk.length;
          if (bytes > 12e3) return send(res, 413, { error: "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0437\u0430\u043F\u0440\u043E\u0441" });
          chunks.push(chunk);
        }
        let data;
        try {
          data = JSON.parse(Buffer.concat(chunks).toString("utf8"));
        } catch {
          return send(res, 400, { error: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 JSON" });
        }
        if (!valid(data?.state) || !Number.isSafeInteger(data.revision) || data.revision < 0 || data.revision === Number.MAX_SAFE_INTEGER) return send(res, 400, { error: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0430\u044F \u0441\u0446\u0435\u043D\u0430" });
        if ((data.state.final || data.state.rooms[4]) && data.confirmSensitive !== true) return send(res, 400, { error: "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435" });
        const result = await store.put(data.revision, data.state);
        return send(res, result ? 200 : 409, result || { error: "\u0421\u0446\u0435\u043D\u0430 \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u0430\u0441\u044C. \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u043F\u0430\u043D\u0435\u043B\u044C." });
      }
      if (req.method !== "GET" && req.method !== "HEAD") return send(res, 405, { error: "Method not allowed" });
      const file = files[path];
      if (!file) return send(res, 404, { error: "Not found" });
      const content = config.assets?.[file] !== void 0 ? Buffer.from(config.assets[file], "utf8") : await readFile(new URL(file, publicDir));
      const types = { html: "text/html", css: "text/css", js: "text/javascript", svg: "image/svg+xml" };
      res.writeHead(200, { ...headers, "Content-Type": `${types[file.split(".").pop()]}; charset=utf-8` });
      res.end(req.method === "HEAD" ? void 0 : content);
    } catch {
      if (!res.headersSent) send(res, 503, { error: "\u0421\u0435\u0440\u0432\u0435\u0440 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D. \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u0437\u0430\u043F\u0440\u043E\u0441." });
      else res.end();
    }
  });
  server.keepAliveTimeout = 5e3;
  server.on("close", () => store.close());
  return server;
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const server = await createOverlayServer({ assets: globalThis.LAST_CANDLE_ASSETS, key: process.env.WRITE_KEY, driver: process.env.DB_DRIVER || "sqlite", file: process.env.STATE_FILE || "./data/scene.sqlite", supabaseUrl: process.env.SUPABASE_URL, supabaseKey: process.env.SUPABASE_SERVICE_KEY });
  const port = Number(process.env.PORT || 8790), bind = process.env.BIND_HOST || "127.0.0.1";
  server.listen(port, bind, () => console.log(`Overlay server listening on ${bind}:${server.address().port}`));
  for (const signal of ["SIGTERM", "SIGINT"]) process.on(signal, () => server.close(() => process.exit(0)));
}
export {
  createOverlayServer
};
