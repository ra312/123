import React from 'react';

import rauan from './rauan.jpeg';
import './App.css';
import Helmet from 'react-helmet'

class Affiliation extends React.Component{
  render()
  {
    return (
    <form>
        <li>
            <a href="https://scholar.google.com/citations?user=BAxsRYkAAAAJ&hl=en" class="active">
         <div class="col-2 center ai-case">
              <i class="ai ai-google-scholar ai-4x"></i>
              google-scholar
            </div>
    
        </a>
        </li>
    
        <li>
            <a href="http://arxiv.org/a/akylzhanov_r_1" class="active">
                <div class="col-2 center ai-case">
                    <i class="ai ai-arxiv ai-4x"></i>
                        arxiv
                </div>
            </a>
        </li>
      </form>
    )
  }
}


function App() {
  return (
    <div className="App">
        <Helmet>
          <title>Turbo Todo</title>
          <meta name="description" content="Todos on steroid!" />
          <meta name="theme-color" content="#008f68" />
          <body class="dark" />
        </Helmet>
          
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
a version of Hörmander-Mihlin $L^p$-multiplier theorems on semi-finite von
Neumann algebras. The project is supported by the EPSRC grant EP/R003025/2.
I expect 4 preprints in the coming months from different <a href="research.html">projects</a>.
</p>
<p>
This work builds on my dissertation, “$L^p$-$L^q$ Fourier multipliers on locally
compact groups,” which used von Neumann algebra theory to obtain extensions
of numerous theorems of Fourier analysis to general unimodular and separable
topological groups. Specifically, it analyses $L^p$-$L^q$ Fourier multipliers
considering them as linear operators affiliated with the group von Neumann
algebra. I use the theory of noncommutative integration to establish
the sufficient condition for the $L^p$-$L^q$ boundedness in terms of the
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

    </div>
  );
}

export default App;

