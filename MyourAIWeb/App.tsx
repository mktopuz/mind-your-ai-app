<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #0000ff; -webkit-text-stroke: #0000ff}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #900112; -webkit-text-stroke: #900112}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #0f7001; -webkit-text-stroke: #0f7001}
    p.p4 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; -webkit-text-stroke: #000000; min-height: 14.0px}
    p.p5 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; -webkit-text-stroke: #000000}
    p.p6 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #0e6e6d; -webkit-text-stroke: #0e6e6d}
    span.s1 {font-kerning: none; background-color: #fffffe}
    span.s2 {font-kerning: none; color: #000000; background-color: #fffffe; -webkit-text-stroke: 0px #000000}
    span.s3 {font-kerning: none; color: #0e6e6d; background-color: #fffffe; -webkit-text-stroke: 0px #0e6e6d}
    span.s4 {font-kerning: none; color: #900112; background-color: #fffffe; -webkit-text-stroke: 0px #900112}
    span.s5 {font-kerning: none; color: #0000ff; background-color: #fffffe; -webkit-text-stroke: 0px #0000ff}
    span.s6 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">import</span><span class="s2"> </span><span class="s3">React</span><span class="s2"> </span><span class="s1">from</span><span class="s2"> </span><span class="s4">'react'</span><span class="s2">;</span></p>
<p class="p2"><span class="s5">import</span><span class="s2"> </span><span class="s3">Navbar</span><span class="s2"> </span><span class="s5">from</span><span class="s2"> </span><span class="s1">'./components/Navbar'</span><span class="s2">;</span></p>
<p class="p2"><span class="s5">import</span><span class="s2"> </span><span class="s3">Hero</span><span class="s2"> </span><span class="s5">from</span><span class="s2"> </span><span class="s1">'./components/Hero'</span><span class="s2">;</span></p>
<p class="p3"><span class="s5">import</span><span class="s2"> </span><span class="s3">Services</span><span class="s2"> </span><span class="s5">from</span><span class="s2"> </span><span class="s4">'./components/Features'</span><span class="s2">; </span><span class="s1">// Corrected import path</span></p>
<p class="p2"><span class="s5">import</span><span class="s2"> </span><span class="s3">NewsletterSignUp</span><span class="s2"> </span><span class="s5">from</span><span class="s2"> </span><span class="s1">'./components/NewsletterSignUp'</span><span class="s2">;</span></p>
<p class="p2"><span class="s5">import</span><span class="s2"> </span><span class="s3">Contact</span><span class="s2"> </span><span class="s5">from</span><span class="s2"> </span><span class="s1">'./components/Contact'</span><span class="s2">;</span></p>
<p class="p2"><span class="s5">import</span><span class="s2"> </span><span class="s3">Footer</span><span class="s2"> </span><span class="s5">from</span><span class="s2"> </span><span class="s1">'./components/Footer'</span><span class="s2">;</span></p>
<p class="p4"><span class="s6"></span><br></p>
<p class="p5"><span class="s5">const</span><span class="s1"> </span><span class="s3">App</span><span class="s1">: </span><span class="s3">React</span><span class="s1">.</span><span class="s3">FC</span><span class="s1"> = () =&gt; {</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s1">return</span><span class="s2"> (</span></p>
<p class="p2"><span class="s2"><span class="Apple-converted-space">    </span>&lt;div className=</span><span class="s1">"min-h-screen flex flex-col bg-gradient-to-br from-neutral-darker to-neutral-dark text-neutral-light"</span><span class="s2">&gt;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">      </span>&lt;</span><span class="s3">Navbar</span><span class="s1"> /&gt;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">      </span>&lt;main className=</span><span class="s4">"flex-grow"</span><span class="s1">&gt;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">        </span>&lt;</span><span class="s3">Hero</span><span class="s1"> /&gt;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">        </span>&lt;</span><span class="s3">Services</span><span class="s1"> /&gt;</span></p>
<p class="p6"><span class="s2"><span class="Apple-converted-space">        </span>&lt;</span><span class="s1">NewsletterSignUp</span><span class="s2"> /&gt;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">        </span>&lt;</span><span class="s3">Contact</span><span class="s1"> /&gt;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">      </span>&lt;/main&gt;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">      </span>&lt;</span><span class="s3">Footer</span><span class="s1"> /&gt;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">    </span>&lt;/div&gt;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">  </span>);</span></p>
<p class="p5"><span class="s1">};</span></p>
<p class="p4"><span class="s6"></span><br></p>
<p class="p1"><span class="s1">export</span><span class="s2"> </span><span class="s1">default</span><span class="s2"> </span><span class="s3">App</span><span class="s2">;</span></p>
</body>
</html>
