import React from 'react';

import './styles.css';

import datasetImage from '../../assets/dataset-cover.jpg';

function Home() {

    return (
        <div className="Home">
            <h1>Modelo SVM</h1>

            <article id="apresentacao">
                <strong>Previsão de Doença Cardiovascular</strong>
                <img src={datasetImage} alt="dataset" />
                <p>O banco de dados utilizado foi o <a href="https://www.kaggle.com/ronitf/heart-disease-uci">Heart Disease UCI</a>
                que consiste em um dataset com 303 amostras de vários atributos de pacientes que foram
                submetidos a exames para verificar a presença de alguma doença cardiovascular nos pacientes.
                <br/>Os atributos presentes são:</p>
                <ol>
                    <li>Idade;</li>
                    <li>Sexo;</li>
                    <li>Tipo de dor no peito (4 valores);</li>
                    <li>Pressão sanguínea em repouso;</li>
                    <li>Colesterol sérico em mg/dl;</li>
                    <li>Açúcar no sangue em jejum > 120 mg/dl;</li>
                    <li>Resultados eletrocardiográficos em repouso (valores 0,1,2);</li>
                    <li>Frequência cardíaca máxima atingida;</li>
                    <li>Angina induzida por exercício;</li>
                    <li>Oldpeak (depressão ST do pico do exercício);</li>
                    <li>A inclinação do segmento ST do pico do exercício;</li>
                    <li>Número de vasos principais (0-3) coloridos por fluoroscopia;</li>
                    <li>Thal: [3=normal; 6=defeito fixo; 7=defeito reversível].</li>
                </ol>
                <p>O último atributo, <i>target</i>, contém o resultado de saída esperado
                1 para presença de doença ou 0 para ausência de doença cardiovascular. Totalizando 14 atributos</p>
            </article>

            <hr />

        </div>
    );

};

export default Home;
