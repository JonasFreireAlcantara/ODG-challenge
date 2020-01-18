import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import datasetImage from '../../assets/dataset-cover.jpg';

import parameterGamma from '../../assets/gamma_0-5.png';
import parameterRegularization from '../../assets/regularization_0-10.png';

function Home() {

    return (
        <div className="Home">
            <h1>Modelo SVM</h1>

            <article id="apresentacao">
                <h3>Previsão de Doença Cardiovascular</h3>
                <img src={datasetImage} alt="dataset" />
                <p>O banco de dados utilizado foi o <a href="https://www.kaggle.com/ronitf/heart-disease-uci">Heart Disease UCI</a> que 
                consiste em um dataset com 303 amostras de vários atributos de pacientes que foram
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
                <p>O dataset possui um problema de ausência de alguns dados, por exemplo,
                alguns valores de pressão sanguínea são iguais a zero, o que de fato é impossível
                para uma pessoa viva, estes casos são atributos que naquele paciente em questão,
                não foi medido este atributo, sendo difícil a identificação e correção deste tipo
                de dado, apenas foi considerado que valores inconsistentes foram mapeados para o número 0.</p>
            </article>

            <hr />

            <article id="analise-dataset">
                <h3>Análise do Dataset</h3>
                <Link className="navigation-button" to="/data">Dataset Exploration</Link>
            </article>

            <hr />

            <article id="experimento">
                <h3>Experimento</h3>
                
                <p>O experimento consistiu na utilização do modelo SVM para classificação
                dos casos de previsão da doença.</p>
                
                <p>A base para treinamento consistiu no dataset mencionado acima, com 303 amostras
                sendo 95% para treinamento e 5% para teste, os dados foram embaralhados
                antes de fazer a divisão.</p>
                
                <p>O modelo SVM possui diversos parâmetros para melhoria dos resultados, foi utilizado
                variação nos parâmetros gama e regularização, cada um por vez.</p>
                
                <p>Para este experimento foi variado os parâmetros gama e regularização,
                um de cada vez. O parâmetro regularização foi variado no intervalo de [0.1; 10)
                com intervalos de 0.1 no valor da regularização, ou seja, [0.1, 0.2, 0.3, ... 9.9].
                O parâmetro gama foi variado no intervalo de [0.1; 5) também com intervalos de 0.1 no valor
                do gama, ou seja, [0.1, 0.2, 0.3, ..., 4.9].</p> 

                <img src={parameterGamma} alt="Parâmetro Gama" />
                <p>A imagem acima apresenta o resultado da acurácia obtida para a variação do parâmetro gama.
                Nela é possível perceber que a acurácia alcança o seu maior valor, para um valor de gama = 0.1.</p>

                <img src={parameterRegularization} alt="Parâmetro Regularização" />
                <p>A imagem acima apresenta o resultado da acurácia obtida na variação do parâmetro regularização
                Neste caso os melhores resultados encontram-se entre 0.1 e 2.1 com uma ressalva no intervalo 0.8 e 1.2,
                onde ocorre uma ligeira queda na acurácia.</p>

            </article>

            <hr />

            <article id="resultado">
                <h3>Resultados do Experimento</h3>
                
                <p>Pelo fato dos experimentos acima apresentaram melhores resultados
                utilizando os parâmetros regularization C = 2, e gamma = 0.1, para
                avaliar outras métricas, as métricas utilizadas serão:</p>
                <ul>
                    <li>Acurácia;</li>
                    <li>Average Precision;</li>
                    <li>Precision;</li>
                    <li>Recall;</li>
                    <li>F-measure.</li>
                </ul>
                <p>Os resultados obtidos foram:</p>
                <ul>
                    <li>Acurácia: 0.8125</li>
                    <li>Average Precision: 0.7988</li>
                    <li>Precision: 0.8181</li>
                    <li>Recall: 0.9</li>
                    <li>F-measure: 0.8571</li>
                </ul>
            </article>

        </div>
);

};

export default Home;
