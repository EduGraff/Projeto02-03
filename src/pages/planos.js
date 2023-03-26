import React from 'react';
import Footer from './../components/Footer/index';
import Header from '../components/Header';

function Planos() {
    return (
        <div>
            <center><h1>PLANOS DISPONÍVEIS</h1></center>
            <Header />
            <div class="card-group">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Plano A</h5>
                        <p class="card-text">R$18,99</p>
                        <p class="card-text"><small class="text-muted">Qualidade 720P</small></p>
                    </div>
                    <div className="btn btn-primary">
                    Adquirir
                  </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Plano B</h5>
                        <p class="card-text">R$25,99</p>
                        <p class="card-text"><small class="text-muted">Qualidade 1080p</small></p>
                    </div>
                    <div className="btn btn-primary">
                    Adquirir
                  </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Plano C</h5>
                        <p class="card-text">R$35,99</p>
                        <p class="card-text"><small class="text-muted">Qualidade 4K</small></p>
                    </div>
                    <div className="btn btn-primary">
                    Adquirir
                  </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Planos;