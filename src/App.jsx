




import React, { useEffect, useRef, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import gsap from "gsap";


// Import local assets from src/assets folder
import home1Img from "./assets/home-1.webp";
import home2Img from "./assets/home-2.webp";
import home3Img from "./assets/home-3.webp";
import home4Img from "./assets/home-4.webp";
import home5Img from "./assets/home-5.webp";
import home6Img from "./assets/home-6.webp";
import home7Img from "./assets/home-7.webp";
import home8Img from "./assets/home-8.webp";
import home9Img from "./assets/home-9.webp";
import home10Img from "./assets/home-10.webp";
import home11Img from "./assets/home-11.webp";
import homeRtlImg from "./assets/home-1-rtl.webp";

import comingSoonImg1 from "./assets/comming-soon.webp";
import comingSoonImg2 from "./assets/comming-soon (1).webp";
import comingSoonImg3 from "./assets/comming-soon (2).webp";

// Import Inner Pages assets
import inner1Img from "./assets/inner-1.webp";
import inner1AltImg from "./assets/inner-1 (1).webp";
import inner2Img from "./assets/inner-2.webp";
import inner3Img from "./assets/inner-3.webp";
import inner4Img from "./assets/inner-4.webp";
import inner5Img from "./assets/inner-5.webp";
import inner6Img from "./assets/inner-6.webp";
import inner7Img from "./assets/inner-7.webp";

/* =====================================================================
   NAVBAR + FOOTER (all styles are prefixed "bx-" so they never clash with Tailwind)
   ===================================================================== */
/* All styles are prefixed with "bx-" so they never clash with your Tailwind classes */
const bxCss = `
@import url("https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&display=swap");
:root{--bx-nav-h:clamp(72px,5.8vw,110px);--bx-nav:#0a1d21;--bx-teal:#2eb5a4;--bx-line:rgba(255,255,255,.08)}
html{scroll-behavior:smooth;scroll-padding-top:var(--bx-nav-h)}

/* NAVBAR */
.bx-navbar,.bx-footer{font-family:"Hanken Grotesk","Helvetica Neue",Arial,sans-serif}
.bx-navbar{
  position:fixed;top:0;left:0;right:0;z-index:50;background:var(--bx-nav);color:#fff;
  height:var(--bx-nav-h);padding:0 clamp(18px,4.9vw,76px);
  border-radius:0 0 clamp(18px,1.5vw,28px) clamp(18px,1.5vw,28px);
  display:flex;align-items:center;justify-content:space-between;
}
.bx-logo{display:flex;align-items:center;gap:.28em;color:#fff;text-decoration:none;font-size:clamp(32px,2.45vw,47px)}
.bx-logo svg{width:1.08em;height:1.2em;display:block}
.bx-logo span{font-weight:400;letter-spacing:-.03em;line-height:1}
.bx-menu{list-style:none;margin:0;padding:0;display:flex;gap:clamp(22px,2.9vw,55px);position:absolute;left:50%;transform:translateX(-50%)}
.bx-menu a{color:#fff;text-decoration:none;font-weight:500;letter-spacing:-.01em;font-size:clamp(15px,1.06vw,20px);transition:color .2s}
.bx-menu a:hover{color:var(--bx-teal)}
.bx-burger{display:none;background:none;border:0;width:44px;height:44px;color:#fff;cursor:pointer;place-items:center}

/* FOOTER */
.bx-footer{
  position:relative;z-index:10;color:#fff;text-align:center;padding:0;
  background:radial-gradient(60vw 30vw at 6% 90%,rgba(28,150,135,.3),transparent 70%),radial-gradient(50vw 28vw at 96% 85%,rgba(28,150,135,.18),transparent 70%),repeating-linear-gradient(90deg,rgba(255,255,255,.012) 0 3.2vw,rgba(0,0,0,.16) 3.2vw 6.4vw),linear-gradient(180deg,#041a1e,#021012);
}
.bx-foot-top{position:relative;overflow:hidden;min-height:clamp(420px,31vw,640px);padding:clamp(56px,6.4vw,130px) 20px 0}
.bx-foot-content{position:relative;z-index:2}
.bx-scr{position:absolute;bottom:.3vw;width:26.6vw;height:auto;pointer-events:none;user-select:none;
  -webkit-mask-image:linear-gradient(180deg,transparent,#000 14%,#000 76%,transparent);mask-image:linear-gradient(180deg,transparent,#000 14%,#000 76%,transparent)}
.bx-scr-l{left:0}
.bx-scr-r{right:0}
.bx-badge{display:inline-flex;align-items:center;gap:.7em;padding:.62em 1.3em;border:1px dashed rgba(255,255,255,.2);background:rgba(255,255,255,.015);border-radius:4px;font-size:clamp(10.5px,.98vw,18.5px);font-weight:700;letter-spacing:.055em;text-transform:uppercase}
.bx-badge svg{width:1.45em;height:1.6em}
.bx-h2{margin:clamp(18px,2.1vw,40px) auto 0;font-weight:500;letter-spacing:-.045em;line-height:1.08;font-size:clamp(27px,3.25vw,63px);max-width:15.5em;text-wrap:balance}
.bx-six{position:relative;display:inline-grid;place-items:center;width:1.12em;height:1.12em;margin-right:.1em;vertical-align:-.05em}
.bx-six::before{content:"";position:absolute;inset:0;border-radius:50%;border:.05em solid #1fa597;transform:rotate(-20deg);border-right-color:rgba(31,165,151,.35)}
.bx-six::after{content:"";position:absolute;inset:.07em;border-radius:50%;border:.02em solid rgba(31,165,151,.7)}
.bx-foot-bottom{border-top:1px solid var(--bx-line);background:linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.35));padding:clamp(34px,2.7vw,50px) 20px clamp(36px,2.8vw,52px)}
.bx-footer p{margin:0;font-size:clamp(16px,1.06vw,20px);font-weight:500;letter-spacing:-.03em;color:#e3eaea}
.bx-footer p b{color:#fff;font-weight:700}
.bx-totop{
  position:fixed;right:clamp(18px,3.2vw,60px);bottom:clamp(16px,1.6vw,30px);z-index:60;
  width:clamp(56px,3.9vw,74px);height:clamp(56px,3.9vw,74px);border:0;border-radius:50%;
  background:#fff;color:#0a0a0a;display:grid;place-items:center;cursor:pointer;
  box-shadow:0 6px 24px rgba(0,0,0,.35);
  opacity:0;pointer-events:none;transform:translateY(10px);transition:opacity .25s,transform .25s;
}
.bx-totop.bx-show{opacity:1;pointer-events:auto;transform:none}
.bx-totop.bx-show:hover{transform:translateY(-4px)}
.bx-totop svg{width:34%;height:34%}
.bx-navbar a:focus-visible,.bx-navbar button:focus-visible,.bx-totop:focus-visible{outline:2px solid var(--bx-teal);outline-offset:4px}

@media (max-width:900px){
  .bx-burger{display:grid}
  .bx-menu{display:none;position:absolute;top:100%;left:0;right:0;transform:none;flex-direction:column;gap:0;
    background:var(--bx-nav);padding:6px 22px 18px;border-top:1px solid var(--bx-line);border-radius:0 0 22px 22px}
  .bx-menu.bx-open{display:flex}
  .bx-menu a{display:block;padding:14px 0;font-size:18px;border-bottom:1px solid var(--bx-line)}
  .bx-foot-bottom{padding-bottom:36px}
  .bx-h2{font-size:clamp(27px,6.6vw,44px)}
  .bx-foot-top{min-height:0;padding:56px 20px 0}
  .bx-scr-r{display:none}
  .bx-scr-l{position:relative;display:block;left:auto;bottom:auto;width:100%;max-width:560px;margin:28px auto 0}
  .bx-badge{font-size:clamp(10px,2.5vw,15px)}
  .bx-totop,.bx-totop.bx-show:hover{position:static;opacity:1;pointer-events:auto;transform:none;margin:22px auto 0}
}
`;

function BexonNavbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Demos", "#demos"],
    ["Inner Pages", "#innerpages"],
    ["Features", "#features"],
    ["Testimonials", "#testimonials"],
  ];

  return (
    <header className="bx-navbar">
      <style>{bxCss}</style>

      <a className="bx-logo" href="#" aria-label="Bexon home">
        <svg viewBox="0 0 50 56" aria-hidden="true">
          <polygon points="25,0 50,14 25,28 0,14" fill="#4fd1bf" />
          <polygon points="0,14 25,28 25,56 0,42" fill="#1f9b8c" />
          <polygon points="50,14 25,28 25,56 50,42" fill="#2eb5a4" />
        </svg>
        <span>Bexon</span>
      </a>

      <ul className={`bx-menu${open ? " bx-open" : ""}`}>
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} onClick={() => setOpen(false)}>{label}</a>
          </li>
        ))}
      </ul>

      <button
        className="bx-burger"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>
    </header>
  );
}

function BexonFooter({ leftScreen, rightScreen }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="bx-footer">
      <style>{bxCss}</style>

      <div className="bx-foot-top">
        <div className="bx-foot-content">
        <div className="bx-badge">
          <svg viewBox="0 0 50 56" aria-hidden="true">
            <polygon points="25,0 50,14 25,28 0,14" fill="#4fd1bf" />
            <polygon points="0,14 25,28 25,56 0,42" fill="#1f9b8c" />
            <polygon points="50,14 25,28 25,56 50,42" fill="#2eb5a4" />
          </svg>
          Your next corporate business theme
        </div>
        <h2 className="bx-h2">
          Life-time license, free updates and <span className="bx-six">6</span> months of free support.
        </h2>
        </div>
        {leftScreen && <img className="bx-scr bx-scr-l" src={leftScreen} alt="" aria-hidden="true" />}
        {rightScreen && <img className="bx-scr bx-scr-r" src={rightScreen} alt="" aria-hidden="true" />}
      </div>

      <div className="bx-foot-bottom">
      <p>© All rights reserved by <b>Theme Junction</b></p>

      <button
        className={`bx-totop${showTop ? " bx-show" : ""}`}
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20V4M5 11l7-7 7 7" />
        </svg>
      </button>
      </div>
    </footer>
  );
}

/* Footer side screens (embedded images, so no extra files are needed) */
const FOOTER_LEFT_IMG = "data:image/webp;base64,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qDGTkImRbnTsciHL1g/VbdgarAitizYdxsAIDLgvUpjJb9uCRqWpgqACqCkRbpmOIgAAAEMyUEF/FgAAAAAWf2p1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZZanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYToxY2UzMWEyZi0yOTZhLTRhZDAtYmVlZi03MDJhMTMxODg5NmMAAAADlGp1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALlqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaOvNTs1W8mkz7IapK261kOIAAABtY2JvcqNpZGM6Zm9ybWF0amltYWdlL3dlYnBqaW5zdGFuY2VJRHgseG1wOmlpZDozZmExN2VhYy0zYjk0LTRkNWMtOTlmNy0zZDBhYjIyNmVkMGJscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNoBs4H1sqfd30RDdZrKogqYAAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFgg8yr52Xpg7JvrNwBnR8hhVUI0vemBXUnk7YGqZsy1RcakZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaGhYfzyYcXNyw7rXGACin+EAAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRMAAAAAAAAAAAAAAAAZGhhc2hYIFmy6/CfGR5ZP66wl3A0LHuOEXP6Mz8E85SGY/BqxiLPZG5hbWVuanVtYmYgbWFuaWZlc3RqZXhjbHVzaW9uc4GiZXN0YXJ0GS3oZmxlbmd0aBkWhwAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOjFjZTMxYTJmLTI5NmEtNGFkMC1iZWVmLTcwMmExMzE4ODk2Yy9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOjExOWFiYzg4LTA4MTQtNDdlZC1iOGZlLTM3MjVkYzgwYmIzMnJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDzKvnZemDsm+s3AGdHyGFVQjS96YFdSeTtgapmzLVFxqJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFgg/JQnPEIVOUilL6F8tMqyXniXPMhmKzLeHU6oaVdl0j2iY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggC8b/oGlhi7LSLM/9Ea02au/vS70DkurpDtRXpG6kvMx0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQDKHi9kTNNWU4TaOcbVr5+pQcNnXBcixOCju//9jFGUCNqGH6f7/6iscgy3cjDYpA6OtutGZvZra0xtSdE5PXrEA";
const FOOTER_RIGHT_IMG = "data:image/webp;base64,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a2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFggyVyIq3RmYntwAoyfL6Geh2fw0gM9MF+X+cFW8UwCeFakZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaFp/0jqtSmEu+klfp1g/absAAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRMAAAAAAAAAAAAAAAAZGhhc2hYICSzVz4cvM+JmIq3QDaskfp2BaDCQBuLrByEh4g62OszZG5hbWVuanVtYmYgbWFuaWZlc3RqZXhjbHVzaW9uc4GiZXN0YXJ0GTLyZmxlbmd0aBkWhwAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOjg5YjRiZDJmLWY4ZmYtNGUzNS04ZWM0LTdmMjc2ZWM2NmU5OC9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOjBmMGYzNTkxLTA0MDYtNDkzZC1hN2M4LWExNTgzYzU2MjFhOXJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCDJXIirdGZie3ACjJ8voZ6HZ/DSAz0wX5f5wVbxTAJ4VqJjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFgg6KsqgRAHeFpbyvrM6MVdtrljiqGJ+j+K4RnJhB2bHJKiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFgg1nxRAZk4lWtsVOBVhr5jMxGAPogDAd2VwxAMDA8k57B0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQC8EDoGImWbRvO3J8Vt+i9thX+b6ZRIaPqG3kPyO5TA5pZgctEbA/GZ6Ni/DFUbAlth4tf/ZK0NTjv3Yhu3ZxeUA";

function BexonLandingPage() {
  const sliderRef = useRef(null);
  const innerSlider1Ref = useRef(null);
  const innerSlider2Ref = useRef(null);

  useEffect(() => {
    // 1. Hero Marquee Slider
    const slider = sliderRef.current;
    if (slider) {
      const totalWidth = slider.scrollWidth / 2;
      var anim = gsap.to(slider, {
        x: `-=${totalWidth}`,
        ease: "none",
        duration: 25,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth)
        }
      });
    }

    // 2. Inner Pages Row 1 Slider (Left to Right)
    const inner1 = innerSlider1Ref.current;
    if (inner1) {
      const width1 = inner1.scrollWidth / 2;
      var anim1 = gsap.to(inner1, {
        x: `-${width1}`,
        ease: "none",
        duration: 35,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % width1)
        }
      });
    }

    // 3. Inner Pages Row 2 Slider (Right to Left / Opposite direction)
    const inner2 = innerSlider2Ref.current;
    if (inner2) {
      const width2 = inner2.scrollWidth / 2;
      gsap.set(inner2, { x: `-${width2}` });
      var anim2 = gsap.to(inner2, {
        x: `0`,
        ease: "none",
        duration: 35,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => {
            let val = parseFloat(x);
            return val >= 0 ? val - width2 : val;
          })
        }
      });
    }

    return () => {
      if (anim) anim.kill();
      if (anim1) anim1.kill();
      if (anim2) anim2.kill();
    };
  }, []);

  const features = [
    { 
      icon: (
        <svg className="w-6 h-6 text-[#268B83]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="M12 7l1.5 2.5h-3L12 7z" />
          <path d="M12 9.5v3" />
        </svg>
      ), 
      title: "Fast load", 
      desc: "performance" 
    },
    { 
      icon: (
        <svg className="w-6 h-6 text-[#268B83]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2l4 4-14 14H4v-4L18 2z" />
          <path d="M14.5 5.5l3 3" />
        </svg>
      ), 
      title: "Fresh & clean", 
      desc: "design" 
    },
    { 
      icon: (
        <svg className="w-6 h-6 text-[#268B83]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 14a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4z" />
          <path d="M18 14a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-4z" />
          <path d="M4 14v-3a8 8 0 0 1 16 0v3" />
          <path d="M18 19c0 1.1-.9 2-2 2h-3" />
        </svg>
      ), 
      title: "Quick & friendly", 
      desc: "support" 
    },
    { 
      icon: (
        <svg className="w-6 h-6 text-[#268B83]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="10" height="6" rx="1" />
          <rect x="4" y="14" width="16" height="6" rx="1" />
          <line x1="20" y1="4" x2="20" y2="10" />
        </svg>
      ), 
      title: "RTL Language", 
      desc: "Support" 
    },
  ];

  const marqueeTexts = [
    "Success And Impact",
    "Founders And Vision",
    "Growth And Impact",
    "Team And Values",
    "Innovation And Future"
  ];

  const homepages = [
    { id: "01", title: "Homepage - 01", isNew: false, image: home1Img },
    { id: "02", title: "Homepage - 02", isNew: false, image: home2Img },
    { id: "03", title: "Homepage - 03", isNew: false, image: home3Img },
    { id: "04", title: "Homepage - 04", isNew: false, image: home4Img },
    { id: "05", title: "Homepage - 05", isNew: false, image: home5Img },
    { id: "06", title: "Homepage - 06", isNew: false, image: home6Img },
    { id: "07", title: "Homepage - 07", isNew: false, image: home7Img },
    { id: "08", title: "Homepage - 08", isNew: true, image: home8Img },
    { id: "09", title: "Homepage - 09", isNew: true, image: home9Img },
    { id: "10", title: "Homepage - 10", isNew: true, image: home10Img },
    { id: "11", title: "Homepage - 11", isNew: true, image: home11Img },
    { id: "rtl", title: "RTL - Demo", isNew: true, image: homeRtlImg },
    { id: "12", title: "Homepage - 12", isNew: false, image: comingSoonImg1, isComingSoon: true },
    { id: "13", title: "Homepage - 13", isNew: false, image: comingSoonImg2, isComingSoon: true },
    { id: "14", title: "Homepage - 14", isNew: false, image: comingSoonImg3, isComingSoon: true },
  ];

  const innerPagesList = [
    inner1Img,
    inner1AltImg,
    inner2Img,
    inner3Img,
    inner4Img,
    inner5Img,
    inner6Img,
    inner7Img,
  ];

  const keyFeaturesList = [
    {
      title: "Friendly support",
      desc: "Our goal is customer satisfaction. For any query, contact Theme Junction",
      icon: (
        <svg className="w-7 h-7 text-[#268B83]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          <path d="M8 10h.01"></path><path d="M12 10h.01"></path><path d="M16 10h.01"></path>
        </svg>
      )
    },
    {
      title: "Lifetime updates",
      desc: "You will get lifetime updates to the theme. Updates may include various.",
      icon: (
        <svg className="w-7 h-7 text-[#268B83]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="4"></circle>
          <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
          <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
        </svg>
      )
    },
    {
      title: "Colors board",
      desc: "Feel free to rearrange entire color palette, whether static or gradient colors.",
      icon: (
        <svg className="w-7 h-7 text-[#268B83]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="8" r="1" fill="currentColor"></circle>
          <circle cx="8" cy="12" r="1" fill="currentColor"></circle>
          <circle cx="16" cy="12" r="1" fill="currentColor"></circle>
          <circle cx="12" cy="16" r="1" fill="currentColor"></circle>
        </svg>
      )
    },
    {
      title: "Template customize",
      desc: "Our template provides the flexibility to customize various elements with ease.",
      icon: (
        <svg className="w-7 h-7 text-[#268B83]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    },
    {
      title: "SEO friendly",
      desc: "Get more visitors making your website content fully visible to search engines.",
      icon: (
        <svg className="w-7 h-7 text-[#268B83]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )
    },
    {
      title: "Font management",
      desc: "You customize the font style with Google Webfont, Typekit, Dafont, Myfont.",
      icon: (
        <svg className="w-7 h-7 text-[#268B83]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 7 4 4 20 4 20 7"></polyline>
          <line x1="9" y1="20" x2="15" y2="20"></line>
          <line x1="12" y1="4" x2="12" y2="20"></line>
        </svg>
      )
    },
    {
      title: "Browsers support",
      desc: "Template support major browsers and will behave identically on Google Chrome.",
      icon: (
        <svg className="w-7 h-7 text-[#268B83]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    },
    {
      title: "Fast performance",
      desc: "Theme Junction is using the best coding practices and top quality code ensure.",
      icon: (
        <svg className="w-7 h-7 text-[#268B83]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
        </svg>
      )
    },
  ];

  const testimonialsList = [
    {
      text: (
        <>
          "Taylor is a <span className="underline decoration-1 underline-offset-4">professional designer</span> really helps my business by providing value to my business . Taylor is a professional Designer he helps"
        </>
      ),
      name: "Marvin McKinney",
      role: "Customer"
    },
    {
      text: (
        <>
          "Their willingness to reach out and resolve the issues I had originally was exceptional <span className="underline decoration-1 underline-offset-4">really helps my business</span> by providing value to my business "
        </>
      ),
      name: "Flawlessmedianl",
      role: "Customer"
    },
    {
      text: (
        <>
          "I recently bought the theme, and it's The design and resolve the issues I had originally functionality design is top-notch. <span className="underline decoration-1 underline-offset-4">Highly recommend.</span>"
        </>
      ),
      name: "Developeromar01",
      role: "Customer"
    },
    {
      text: (
        <>
          "<span className="underline decoration-1 underline-offset-4">Very good support.</span> They help me the settings. Taylor is a professional Designer Overall a very good template and quality support."
        </>
      ),
      name: "Kniiakweiaddo1",
      role: "Customer"
    },
    {
      text: (
        <>
          "<span className="underline decoration-1 underline-offset-4">Awesome customer</span> highly recommended Designer really helps providing value to my business. Taylor a professional Designer he really helps"
        </>
      ),
      name: "Kingprime",
      role: "Customer"
    },
    {
      text: (
        <>
          "<span className="underline decoration-1 underline-offset-4">Great quality,</span> even better support team. Highly illingness to reach out and resolve the support issues I had originally was recommend!"
        </>
      ),
      name: "Aartirawat7",
      role: "Customer"
    }
  ];

  return (
    <div style={{ paddingTop: "var(--bx-nav-h)" }} className="relative min-h-screen bg-[#070b11] text-white font-sans overflow-x-hidden flex flex-col justify-between selection:bg-[#268B83] selection:text-white">
      
      {/* NEW NAVBAR */}
      <BexonNavbar />

      {/* HERO SECTION */}
      <div className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-gradient-to-b from-[#268B83]/20 to-transparent rounded-full filter blur-[150px] pointer-events-none z-0"></div>

        <main className="flex-grow flex flex-col items-center justify-center text-center px-6 max-w-7xl mx-auto z-20 py-24 relative w-full">
          <div className="z-20 max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-[#268B83]/10 border border-[#268B83]/30 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white mb-8">
              <span>RECOGNIZED FOR EXCELLENCE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.15] max-w-4xl mb-8 text-white">
              Prestige Corporate<br />
              Business<br />
              HTML Template
            </h1>

            <a href="#demos" className="inline-flex items-center gap-3 bg-[#268B83] hover:bg-[#1f736c] text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-[#268B83]/25 transition-all hover:scale-105">
              <span>Explore Demos</span>
              <span className="w-6 h-6 rounded-full bg-black/15 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
            </a>
          </div>
        </main>

        {/* FEATURE STRIP */}
        <section id="features" className="w-full z-20 relative">
          <div className="border-t border-b border-dashed border-white/10 bg-[#080d14]/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-dashed divide-white/10">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-5 py-7 px-8 justify-center sm:justify-start hover:bg-white/[0.02] transition-colors duration-300">
                  <div className="w-16 h-16 rounded-full border border-white/10 bg-[#111923] flex items-center justify-center shrink-0 shadow-lg">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-[17px] font-bold text-white leading-snug tracking-wide">{item.title}</p>
                    <p className="text-sm text-gray-400 font-medium mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MARQUEE BANNER */}
          <div className="w-full bg-[#268B83] text-white py-5 overflow-hidden relative select-none shadow-md">
            <div ref={sliderRef} className="flex whitespace-nowrap will-change-transform w-max items-center">
              {[...marqueeTexts, ...marqueeTexts, ...marqueeTexts, ...marqueeTexts].map((text, idx) => (
                <div key={idx} className="flex items-center gap-10 mx-10 text-white font-bold uppercase text-sm sm:text-base tracking-wider">
                  <span>{text}</span>
                  <span className="w-4 h-4 flex items-center justify-center">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M12 2l10 5.5v11L12 22 2 18.5v-11L12 2z"/></svg>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* --- PRE-BUILT HOMEPAGES SECTION --- */}
      <section id="demos" className="bg-[#f2f5f7] text-[#070b11] py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#070b11] uppercase shadow-sm mb-6">
              <span className="w-3.5 h-3.5 bg-[#268B83] rounded-sm flex items-center justify-center text-white text-[9px] font-extrabold">B</span>
              PRE-BUILT HOMEPAGES
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#070b11] leading-tight mb-4">
              Explore{" "}
              <span className="relative inline-block px-2">
                11+
                <svg className="absolute -top-1 -left-2 w-[125%] h-[125%] text-[#268B83] pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                  <path d="M 10 50 C 10 20, 90 20, 90 50 C 90 80, 10 80, 10 50 Z" strokeDasharray="300" strokeDashoffset="0" />
                </svg>
              </span>{" "}
              ready-to-use websites <br className="hidden sm:block" />
              for Corporate Business
            </h2>

            <p className="text-gray-600 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
              Experience a clean, modern design built for business success. Intuitive navigation ensures every decision is effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16">
            {homepages.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border border-gray-200/80 rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="relative rounded-2xl overflow-hidden bg-[#0a181e] aspect-[4/3] flex items-center justify-center mb-4 border border-gray-100">
                  
                  {item.isNew && (
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider z-20 shadow-md">
                      New
                    </span>
                  )}

                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />

                  {!item.isComingSoon && (
                    <div className="absolute inset-0 bg-[#070b11]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <button className="bg-white text-[#070b11] font-bold text-sm px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#268B83] hover:text-white">
                        <span>Explore Demo</span>
                        <span className="w-6 h-6 rounded-full bg-[#070b11] group-hover:bg-white text-white group-hover:text-[#070b11] flex items-center justify-center transition-colors">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  )}
                </div>

                <div className="text-center py-2">
                  <h3 className="text-base font-extrabold text-[#070b11] tracking-tight group-hover:text-[#268B83] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center pt-4">
            <a 
              href="https://themeforest.net" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-3 bg-[#268B83] hover:bg-[#1f736c] text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-xl shadow-[#268B83]/20 transition-all duration-300 hover:scale-105"
            >
              <span>Get Bexon Now</span>
              <span className="w-8 h-8 rounded-full bg-[#0d1c26] text-white flex items-center justify-center shadow-inner">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* --- PRE-BUILT INNERPAGES SECTION --- */}
      <section id="innerpages" className="bg-[#eaf0f3] text-[#070b11] py-24 px-6 relative z-10 overflow-hidden border-t border-gray-300">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          
          <div className="inline-flex items-center gap-2 bg-transparent border border-dashed border-gray-400 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#070b11] uppercase mb-6">
            <span className="w-3.5 h-3.5 bg-[#268B83] rounded-sm flex items-center justify-center text-white text-[9px] font-extrabold">
              <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
            </span>
            PRE-BUILT INNERPAGES
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0f172a] leading-[1.25] mb-6">
            Build faster with{" "}
            <span className="relative inline-flex items-center justify-center min-w-[110px] sm:min-w-[130px] h-20 sm:h-24 rounded-full border-[3px] border-[#268B83] text-[#268B83] px-5 mx-2 align-middle font-black">
              27+
            </span>{" "}
            Pre-Made <br />
            inner page layouts
          </h2>

          <p className="text-gray-600 text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            Build faster using 25+ pre-made inner page layouts, saving time and effort while ensuring a consistent, professional website design.
          </p>
        </div>

        {/* DUAL MOVING SLIDERS CONTAINER */}
        <div className="w-full flex flex-col gap-6 overflow-hidden py-4 select-none">
          
          {/* Row 1: Moves Left to Right */}
          <div className="w-full overflow-hidden flex">
            <div ref={innerSlider1Ref} className="flex gap-6 w-max will-change-transform">
              {[...innerPagesList, ...innerPagesList, ...innerPagesList].map((imgSrc, idx) => (
                <div key={`row1-${idx}`} className="w-[380px] sm:w-[480px] bg-white border border-gray-200 rounded-3xl p-3 shadow-md shrink-0">
                  <div className="relative rounded-2xl overflow-hidden bg-[#0a181e] aspect-[16/10] border border-gray-100">
                    <img src={imgSrc} alt="Inner Page Layout" className="absolute inset-0 w-full h-full object-cover object-top" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Moves Right to Left (Opposite Direction) */}
          <div className="w-full overflow-hidden flex">
            <div ref={innerSlider2Ref} className="flex gap-6 w-max will-change-transform">
              {[...innerPagesList, ...innerPagesList, ...innerPagesList].map((imgSrc, idx) => (
                <div key={`row2-${idx}`} className="w-[380px] sm:w-[480px] bg-white border border-gray-200 rounded-3xl p-3 shadow-md shrink-0">
                  <div className="relative rounded-2xl overflow-hidden bg-[#0a181e] aspect-[16/10] border border-gray-100">
                    <img src={imgSrc} alt="Inner Page Layout" className="absolute inset-0 w-full h-full object-cover object-top" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- KEY FEATURES SECTION --- */}
      <div className="bg-[#070b11] py-8 px-4 sm:px-8">
        <section className="bg-[#070b11] text-white py-20 px-6 sm:px-12 rounded-[40px] border border-white/10 relative z-10 max-w-7xl mx-auto">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header with Left Heading and Right Description */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-transparent border border-dashed border-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-white uppercase mb-6">
                  <span className="w-3.5 h-3.5 bg-[#268B83] rounded-sm flex items-center justify-center text-white text-[9px] font-extrabold">B</span>
                  KEY FEATURES
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.2]">
                  Packed with powerful features for seamless website building
                </h2>
              </div>

              <div className="max-w-md">
                <p className="text-gray-400 text-sm sm:text-base font-normal leading-relaxed">
                  Build stunning, responsive websites effortlessly with powerful features designed for speed, flexibility, and user experience.
                </p>
              </div>
            </div>

            {/* Key Features Grid (4x2 cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFeaturesList.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#0c141f] border border-white/10 hover:border-[#268B83]/50 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    {/* Icon Circle */}
                    <div className="w-16 h-16 rounded-2xl bg-[#111c2a] border border-white/5 flex items-center justify-center mb-8 shadow-inner group-hover:bg-[#268B83]/10 transition-colors">
                      {feature.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm font-normal leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </div>

      {/* --- CLIENT TESTIMONIALS SECTION --- */}
      <section id="testimonials" className="bg-[#e4ecef] text-[#070b11] py-28 px-6 relative z-10 border-t border-gray-300">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 bg-transparent border border-dashed border-gray-400 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#070b11] uppercase mb-6">
              <span className="w-3.5 h-3.5 bg-[#268B83] rounded-sm flex items-center justify-center text-white text-[9px] font-extrabold">
                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
              </span>
              CLIENT FEEDBACK
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#070b11] leading-tight">
              Client testimonials that speak for themselves
            </h2>
          </div>

          {/* Testimonials Grid (3 columns x 2 rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsList.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200/80 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* 5-Star Rating */}
                  <div className="flex items-center gap-1 text-[#268B83] mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Feedback Text */}
                  <p className="text-gray-800 text-base font-normal leading-relaxed mb-8">
                    {item.text}
                  </p>
                </div>

                {/* Divider Line */}
                <div className="border-t border-dashed border-gray-200 pt-6 flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-11 h-11 rounded-full bg-[#82b440] flex items-center justify-center shadow-sm shrink-0">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#070b11] leading-tight">{item.name}</h4>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">{item.role}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* NEW FOOTER */}
      <BexonFooter leftScreen={FOOTER_LEFT_IMG} rightScreen={FOOTER_RIGHT_IMG} />

    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <BexonLandingPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}






