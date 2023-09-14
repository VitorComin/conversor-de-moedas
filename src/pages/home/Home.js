import styles from './Home.module.css';
import { Select, InputNumber } from 'antd';
import React, { useState, useEffect } from 'react';

function Home() {
    const [conversao, setConversao] = useState({
        moeda1: 'Real',
        moeda2: 'Real',
        valor1: 0,
        valor2: 0,
    });

    const taxasDeCambio = {
        'Real-Dólar': 0.23,
        'Real-Euro': 0.19,
        'Dólar-Real': 4.36,
        'Dólar-Euro': 0.83,
        'Euro-Real': 5.25,
        'Euro-Dólar': 1.21,
        // Adicione mais combinações conforme necessário
    };

    useEffect(() => {
        const { moeda1, moeda2, valor1 } = conversao;
        const combinacao = `${moeda1}-${moeda2}`;

        if (taxasDeCambio.hasOwnProperty(combinacao)) {
            const taxaDeCambio = taxasDeCambio[combinacao];
            const valorConvertido = parseFloat(valor1) * taxaDeCambio;
            setConversao({ ...conversao, valor2: valorConvertido.toFixed(2) });
        } else {
            console.error("Combinação de moedas não suportada.");
        }
    }, [conversao]);

    const handleChangeMoeda = (field, value) => {
        setConversao({ ...conversao, [field]: value });
    };

    const handleChangeValor = (field, value) => {
        setConversao({ ...conversao, [field]: value });
    };

    return (
        <section>
            <div className={styles.entrada}>
                <Select
                    className={styles.select}
                    defaultValue="Real"
                    style={{ width: 120 }}
                    onChange={(value) => handleChangeMoeda('moeda1', value)}
                    options={[
                        { value: 'Real', label: 'Real' },
                        { value: 'Dólar', label: 'Dólar' },
                        { value: 'Euro', label: 'Euro' },
                        // Adicione mais moedas conforme necessário
                    ]}
                />
                <InputNumber
                    className={styles.input}
                    defaultValue={0}
                    onChange={(value) => handleChangeValor('valor1', value)}
                />
            </div>
            <div className={styles.saida}>
                <Select
                    className={styles.select}
                    defaultValue="Real"
                    style={{ width: 120 }}
                    onChange={(value) => handleChangeMoeda('moeda2', value)}
                    options={[
                        { value: 'Real', label: 'Real' },
                        { value: 'Dólar', label: 'Dólar' },
                        { value: 'Euro', label: 'Euro' },
                        // Adicione mais moedas conforme necessário
                    ]}
                />
                <InputNumber
                    className={styles.input}
                    defaultValue={0}
                    value={conversao.valor2}
                    readOnly
                />
            </div>
        </section>
    );
}

export default Home;
