import React from 'react';

import rauan from './rauan.jpeg';
import './App.css';
import './nav.css';
import {Helmet} from 'react-helmet'


var Latex = require('react-latex');
function App() {
  return (
    <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Rauan Akylzhanov</title>
          <link href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css" rel="stylesheet"/>
          <link rel="canonical" href="http://mysite.com/example" />  
        </Helmet>
        <h1>Dr. Rauan Akylzhanov </h1> 
        <img src={rauan} width="160" height="200" />    
        {/* <div className="App-header">

        <h3>Dr. Rauan Akylzhanov</h3>
        <table>
        <th>
        <img src={rauan} width="160" height="180" />    
        </th>
        <th>
		    Research Associate, 
        <br></br>
        <a href="https://www.qmul.ac.uk/maths/" target ="_blank">
		    School of Mathematical Sciences  
        </a>
		    <br/>
        </th>
        </table>
        </div>
      */}
<body>
<header>
<nav>
    <ul>
        <li><a href="#">Research</a></li>
        <li><a href="#">Teaching</a></li>
        <li><a href="#">Publications</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
	</header>
<p> 
I obtained my <a  href="./portfolio/thesis_akylzhanov.pdf">PhD</a> in Pure Mathematics from Imperial College London.
Currently, I am a research associate in Geometry and Analysis group at Queen Mary University of London.

Before that, I was a math postdoc in Pure Analysis and PDE group at Imperial College London.

Broadly speaking, in the interface between (harmonic) analysis and operator
algebra theory. The long-term aim is to build theory of partial differential
operators starting from a fixed noncommutative differential geometry.
</p>

<p>
My current project aims at bringing modern techniques of von Neumann algebras
into the study of dispersive estimates for wave, Schrödinger, Klein-Gordon
equations on different backgrounds. In my current working paper, I obtained
a version of Hörmander-Mihlin   <Latex> $L^p$</Latex>-multiplier theorems on semi-finite von
Neumann algebras. The project is supported by the EPSRC grant EP/R003025/2.
</p>

<p>
This work builds on my dissertation, "<Latex>$L^p$-$L^q$</Latex> Fourier multipliers on locally
compact groups,” which used von Neumann algebra theory to obtain extensions
of numerous theorems of Fourier analysis to general unimodular and separable
topological groups. Specifically, it analyses <Latex>$L^p$-$L^q$</Latex> Fourier multipliers
considering them as linear operators affiliated with the group von Neumann
algebra. I use the theory of noncommutative integration to establish
the sufficient condition for the <Latex>$L^p$-$L^q$</Latex> boundedness in terms of the
noncommutative Lorenz spaces on the von Neumann algebras.
I discovered that the norm of the operator is controlled by the decay
rate of the semi-finite trace on the spectral projections and conclude
that the growth of the spectral projections is the only essential information
to derive the bounds.
</p>

<p>
Apart from these topics, I am now interested in mathematical foundations of
artificial intelligence.
Together with Shahn Majid,
I am exploring the generating functional and n-point correlation
functions arising from 0+1 quantum field theory on the lattice line.
</p>
</body>
    </div>
  );
}

export default App;

