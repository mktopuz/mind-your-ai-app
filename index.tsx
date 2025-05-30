<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; -webkit-text-stroke: #000000; min-height: 14.0px}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #0000ff; -webkit-text-stroke: #0000ff}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #900112; -webkit-text-stroke: #900112}
    p.p4 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; -webkit-text-stroke: #000000}
    p.p5 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #0e6e6d; -webkit-text-stroke: #0e6e6d}
    span.s1 {font-kerning: none}
    span.s2 {font-kerning: none; background-color: #fffffe}
    span.s3 {font-kerning: none; color: #000000; background-color: #fffffe; -webkit-text-stroke: 0px #000000}
    span.s4 {font-kerning: none; color: #0e6e6d; background-color: #fffffe; -webkit-text-stroke: 0px #0e6e6d}
    span.s5 {font-kerning: none; color: #900112; background-color: #fffffe; -webkit-text-stroke: 0px #900112}
    span.s6 {font-kerning: none; color: #0000ff; background-color: #fffffe; -webkit-text-stroke: 0px #0000ff}
  </style>
</head>
<body>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s2">import</span><span class="s3"> </span><span class="s4">React</span><span class="s3"> </span><span class="s2">from</span><span class="s3"> </span><span class="s5">'react'</span><span class="s3">;</span></p>
<p class="p3"><span class="s6">import</span><span class="s3"> </span><span class="s4">ReactDOM</span><span class="s3"> </span><span class="s6">from</span><span class="s3"> </span><span class="s2">'react-dom/client'</span><span class="s3">;</span></p>
<p class="p2"><span class="s2">import</span><span class="s3"> </span><span class="s4">App</span><span class="s3"> </span><span class="s2">from</span><span class="s3"> </span><span class="s5">'./App'</span><span class="s3">;</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p4"><span class="s6">const</span><span class="s2"> rootElement = document.getElementById(</span><span class="s5">'root'</span><span class="s2">);</span></p>
<p class="p4"><span class="s6">if</span><span class="s2"> (!rootElement) {</span></p>
<p class="p3"><span class="s3"><span class="Apple-converted-space">  </span></span><span class="s6">throw</span><span class="s3"> </span><span class="s6">new</span><span class="s3"> </span><span class="s4">Error</span><span class="s3">(</span><span class="s2">"Could not find root element to mount to"</span><span class="s3">);</span></p>
<p class="p4"><span class="s2">}</span></p>
<p class="p1"><span class="s1"></span><br></p>
<p class="p4"><span class="s6">const</span><span class="s2"> root = </span><span class="s4">ReactDOM</span><span class="s2">.createRoot(rootElement);</span></p>
<p class="p4"><span class="s2">root.render(</span></p>
<p class="p5"><span class="s3"><span class="Apple-converted-space">  </span>&lt;</span><span class="s2">React</span><span class="s3">.</span><span class="s2">StrictMode</span><span class="s3">&gt;</span></p>
<p class="p4"><span class="s2"><span class="Apple-converted-space">    </span>&lt;</span><span class="s4">App</span><span class="s2"> /&gt;</span></p>
<p class="p5"><span class="s3"><span class="Apple-converted-space">  </span>&lt;/</span><span class="s2">React</span><span class="s3">.</span><span class="s2">StrictMode</span><span class="s3">&gt;</span></p>
<p class="p4"><span class="s2">);</span></p>
<p class="p1"><span class="s1"></span><br></p>
</body>
</html>
