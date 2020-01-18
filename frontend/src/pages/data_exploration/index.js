import React, { Component } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import Dataset from './Data';

class DataExploration extends Component {

    constructor() {
        super();

        this.state = {}
    }

    componentDidMount() {
        const { dataset } = Dataset;

        this.setState({ dataset });
    }

    render () {
        const { dataset } = this.state;

        return (
            <div className="Home">
                <h1>Dataset Exploration</h1>

                <article id="apresentacao">
                    <h3>Heart Disease UCI</h3>
                </article>

                { dataset &&
                    <DataTable value={dataset}
                        paginator={true}
                        rows={20}
                        rowsPerPageOptions={[5,10,20]}
                        scrollable={true}
                        scrollHeight="300px" >

                        <Column field="age" header="Idade" filter={true} sortable={true} style={{width:'120px'}} />
                        <Column field="ca" header="Dor no peito" filter={true} sortable={true} style={{width:'150px'}} />
                        <Column field="chol" header="Colesterol sérico" filter={true} sortable={true} style={{width:'170px'}} />
                        <Column field="exang" header="Angina" filter={true} sortable={true} style={{width:'120px'}} />
                        <Column field="fbs" header="Glicose > 120 mg/dl" filter={true} sortable={true} style={{width:'190px'}} />
                        <Column field="oldpeak" header="Oldpeak" filter={true} sortable={true} style={{width:'120px'}} />
                        <Column field="restecg" header="Eletrocardiografia em repouso" filter={true} sortable={true} style={{width:'190px'}} />
                        <Column field="sex" header="Sexo" filter={true} sortable={true} style={{width:'120px'}} />
                        <Column field="slope" header="Inclinação ST" filter={true} sortable={true} style={{width:'140px'}} />
                        <Column field="thal" header="Thal" filter={true} sortable={true} style={{width:'120px'}} />
                        <Column field="thalach" header="Frequência cardíaca máxima" filter={true} sortable={true} style={{width:'190px'}} />
                        <Column field="trestbps" header="Pressão em repouso" filter={true} sortable={true} style={{width:'190px'}} />
                        <Column field="target" header="Possui doença" filter={true} sortable={true} style={{width:'150px'}} />
                    </DataTable>
                }
                
                <hr style={{marginTop:'50px'}} />

            </div>
        );
    }

};

export default DataExploration;