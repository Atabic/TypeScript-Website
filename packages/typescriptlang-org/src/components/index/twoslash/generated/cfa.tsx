// Auto-generated by the twoslash-cli from cfa.ts.md
import React from "react"

const innerHTML = `
<pre class="shiki min-dark twoslash lsp" style="background-color: #1f1f1f; color: #b392f0"><div class="language-id">ts</div><div class='code-container'><code><div class='line'><span style="color: #F97583">const</span><span style="color: #B392F0"> </span><span style="color: #79B8FF"><data-lsp lsp='const users: {&#10;    name: string;&#10;}[]' >users</data-lsp></span><span style="color: #B392F0"> </span><span style="color: #F97583">=</span><span style="color: #B392F0"> [{ <data-lsp lsp='(property) name: string' >name</data-lsp></span><span style="color: #F97583">:</span><span style="color: #B392F0"> </span><span style="color: #FFAB70">"Ahmed"</span><span style="color: #B392F0"> }, { <data-lsp lsp='(property) name: string' >name</data-lsp></span><span style="color: #F97583">:</span><span style="color: #B392F0"> </span><span style="color: #FFAB70">"Gemma"</span><span style="color: #B392F0"> }, { <data-lsp lsp='(property) name: string' >name</data-lsp></span><span style="color: #F97583">:</span><span style="color: #B392F0"> </span><span style="color: #FFAB70">"Jon"</span><span style="color: #B392F0"> }]</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #F97583">const</span><span style="color: #B392F0"> </span><span style="color: #79B8FF"><data-lsp lsp='const jon: {&#10;    name: string;&#10;} | undefined' >jon</data-lsp></span><span style="color: #B392F0"> </span><span style="color: #F97583">=</span><span style="color: #B392F0"> </span><span style="color: #79B8FF"><data-lsp lsp='const users: {&#10;    name: string;&#10;}[]' >users</data-lsp></span><span style="color: #B392F0">.<data-lsp lsp='(method) Array&lt;{ name: string; }>.find(predicate: (value: {&#10;    name: string;&#10;}, index: number, obj: {&#10;    name: string;&#10;}[]) => unknown, thisArg?: any): {&#10;    name: string;&#10;} | undefined (+1 overload)' >find</data-lsp>(<data-lsp lsp='(parameter) u: {&#10;    name: string;&#10;}' >u</data-lsp> </span><span style="color: #F97583">=&gt;</span><span style="color: #B392F0"> </span><span style="color: #79B8FF"><data-lsp lsp='(parameter) u: {&#10;    name: string;&#10;}' >u</data-lsp></span><span style="color: #B392F0">.<data-lsp lsp='(property) name: string' >name</data-lsp> </span><span style="color: #F97583">===</span><span style="color: #B392F0"> </span><span style="color: #FFAB70">"jon"</span><span style="color: #B392F0">)</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #F97583">if</span><span style="color: #B392F0"> (<data-lsp lsp='const jon: {&#10;    name: string;&#10;} | undefined' >jon</data-lsp>) {</span></div><div class='line'><span style="color: #B392F0">  </span><span style="color: #79B8FF"><data-lsp lsp='var console: Console' >console</data-lsp></span><span style="color: #B392F0">.<data-lsp lsp='(method) Console.log(...data: any[]): void' >log</data-lsp>(<data-lsp lsp='const jon: {&#10;    name: string;&#10;}' >jon</data-lsp>)</span></div><div class='line'><span style="color: #B392F0">} </span><span style="color: #F97583">else</span><span style="color: #B392F0"> {</span></div><div class='line'><span style="color: #B392F0">  </span><span style="color: #F97583">throw</span><span style="color: #B392F0"> </span><span style="color: #F97583">new</span><span style="color: #B392F0"> </span><span style="color: #79B8FF"><data-lsp lsp='var Error: ErrorConstructor&#10;new (message?: string | undefined) => Error' >Error</data-lsp></span><span style="color: #B392F0">(</span><span style="color: #FFAB70">&apos;Could not find user "Jon"&apos;</span><span style="color: #B392F0">)</span></div><div class='line'><span style="color: #B392F0">}</span></div><div class='line'>&nbsp;</div></code></div></pre>
<pre class="shiki typescript-beta-dark twoslash lsp" style="background-color: #00273f; color: #D4D4D4"><div class="language-id">ts</div><div class='code-container'><code><div class='line'><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> <data-lsp lsp='const users: {&#10;    name: string;&#10;}[]' >users</data-lsp> = [{ <data-lsp lsp='(property) name: string' >name</data-lsp>: </span><span style="color: #CE9178">"Ahmed"</span><span style="color: #D4D4D4"> }, { <data-lsp lsp='(property) name: string' >name</data-lsp>: </span><span style="color: #CE9178">"Gemma"</span><span style="color: #D4D4D4"> }, { <data-lsp lsp='(property) name: string' >name</data-lsp>: </span><span style="color: #CE9178">"Jon"</span><span style="color: #D4D4D4"> }]</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> <data-lsp lsp='const jon: {&#10;    name: string;&#10;} | undefined' >jon</data-lsp> = <data-lsp lsp='const users: {&#10;    name: string;&#10;}[]' >users</data-lsp>.<data-lsp lsp='(method) Array&lt;{ name: string; }>.find(predicate: (value: {&#10;    name: string;&#10;}, index: number, obj: {&#10;    name: string;&#10;}[]) => unknown, thisArg?: any): {&#10;    name: string;&#10;} | undefined (+1 overload)' >find</data-lsp>(<data-lsp lsp='(parameter) u: {&#10;    name: string;&#10;}' >u</data-lsp> </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> <data-lsp lsp='(parameter) u: {&#10;    name: string;&#10;}' >u</data-lsp>.<data-lsp lsp='(property) name: string' >name</data-lsp> === </span><span style="color: #CE9178">"jon"</span><span style="color: #D4D4D4">)</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #569CD6">if</span><span style="color: #D4D4D4"> (<data-lsp lsp='const jon: {&#10;    name: string;&#10;} | undefined' >jon</data-lsp>) {</span></div><div class='line'><span style="color: #D4D4D4">  <data-lsp lsp='var console: Console' >console</data-lsp>.<data-lsp lsp='(method) Console.log(...data: any[]): void' >log</data-lsp>(<data-lsp lsp='const jon: {&#10;    name: string;&#10;}' >jon</data-lsp>)</span></div><div class='line'><span style="color: #D4D4D4">} </span><span style="color: #569CD6">else</span><span style="color: #D4D4D4"> {</span></div><div class='line'><span style="color: #D4D4D4">  </span><span style="color: #569CD6">throw</span><span style="color: #D4D4D4"> </span><span style="color: #569CD6">new</span><span style="color: #D4D4D4"> <data-lsp lsp='var Error: ErrorConstructor&#10;new (message?: string | undefined) => Error' >Error</data-lsp>(</span><span style="color: #CE9178">&apos;Could not find user "Jon"&apos;</span><span style="color: #D4D4D4">)</span></div><div class='line'><span style="color: #D4D4D4">}</span></div><div class='line'>&nbsp;</div></code></div></pre>
`

export const Code = () => <div dangerouslySetInnerHTML={{ __html: innerHTML }} />
