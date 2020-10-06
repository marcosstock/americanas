import React from 'react';
import { Card, Image} from 'react-bootstrap';
import topinho from '../../imagens/TOPINHO.webp';
import logo from '../../imagens/logo.png'
import favoritos from '../../imagens/favoritos.jpg'
import compras from '../../imagens/compras.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
export default function Home (){
  return(
    <>
    <Card>
    
    <Card.Body>
    
    <Card.Text>
    <Image src={topinho} alt="" style={{height:40}} />
    </Card.Text>
    
    </Card.Body>
    </Card>
    <div className='top'>
    <div className='topB'>
    <img src={logo} alt=""/>
    </div>
    <div className='topC'>
    <h1>campo de busca</h1>
    </div>
    <div className='topD'>
    <h1>faça seu cadastro</h1>
    </div>
    <div className='topE'>
    <img src={favoritos} alt=""/>
    </div>
    <div className='topF'>
    <img src={compras} alt=""/>
    </div>
    </div>   
    
    <div className='top1'>
    <div className='top1aa'>
    <h5>LOCAL DE ENTREGA</h5>
    </div>
    <div className='top1a'>
    <h5>SEJA MAIS</h5>
    </div>
    <div className='top1a'>
    <h5>EMPRESA</h5>
    </div>
    <div className='top1a'>
    <h5>VOTE NA GENTE</h5>
    </div>
    <div className='top1a'>
    <h5>BAIXE APP</h5>
    </div>
    <div className='top1a'>
    <h5>RECEBA HOJE</h5>
    </div>
    <div className='top1a'>
    <h5>PROD. IMPORTADOS</h5>
    </div>
    <div className='top1a'>
    <h5>TRABALHE CONOSCO</h5>
    </div>
    <div className='top1a'>
    <h5>OFERTA DO DIA</h5>
    </div>
    
    
    
    </div>
    <div className='top2'>
    <div className='departamento1'>
    <h5>COMPRE POR DEPARTAMENTO</h5>
    </div>
    <div className='departamento'>
    <h5>MERCADO</h5>
    </div>
    <div className='departamento'>
    <h5>BRINQUEDOS</h5>
    </div>
    <div className='departamento'>
    <h5>ELETRONICOS</h5>
    </div>
    <div className='departamento'>
    <h5>ELETRODOMESTICOS</h5>
    </div>
    <div className='departamento'>
    <h5>ELETROPORTAVEIS</h5>
    </div>
    <div className='departamento'>
    <h5>MOVEIS</h5>
    </div>
    <div className='departamento'>
    <h5>INFORMATICA</h5>
    </div>
    </div>
    
    </> 
    );
  }