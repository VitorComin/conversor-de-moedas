import styles from './Home.module.css';
import { Select, InputNumber } from 'antd';
import React, { useState, useEffect } from 'react';

function Home() {

    const [moedaInicial, setMoedaInicial] = useState('Real');
    const [moedaFinal, setMoedaFinal] = useState('Real');
    const [valorAConverter, setValorAConverter] = useState(0);
    const [valorConvertido, setValorConvertido] = useState(0);

    const selecionado1 = (value) => {
        setMoedaInicial(value)
    }    

    const selecionado2 = (value) => {
        setMoedaFinal(value)
    }

    useEffect(() => {
        converter();
    }, [moedaInicial, moedaFinal, valorAConverter]);

    function converter() {

        if (moedaInicial === 'Real') {
            if (moedaFinal === 'Real') {
                setValorConvertido(valorAConverter * 1)
            }
            if (moedaFinal === 'Dólar') {
                setValorConvertido(valorAConverter * 0.21)
            }
            if (moedaFinal === 'Euro') {
                setValorConvertido(valorAConverter * 0.19)
            }
        } else if (moedaInicial === 'Dólar') {
            if (moedaFinal === 'Real') {
                setValorConvertido(valorAConverter * 4.87)
            }
            if (moedaFinal === 'Dólar') {
                setValorConvertido(valorAConverter * 1)
            }
            if (moedaFinal === 'Euro') {
                setValorConvertido(valorAConverter * 0.91)
            }
        } else if (moedaInicial === 'Euro') {
            if (moedaFinal === 'Real') {
                setValorConvertido(valorAConverter * 5.19)
            }
            if (moedaFinal === 'Dólar') {
                setValorConvertido(valorAConverter * 1.07)
            }
            if (moedaFinal === 'Euro') {
                setValorConvertido(valorAConverter * 1)
            }
        }
    }

    return (
        <section className={styles.secHome}>
            <div className={styles.entrada}>
                <Select className={styles.select}
                    defaultValue="Real"
                    style={{
                        width: 120,
                    }}
                    onChange={selecionado1}
                    options={[
                        {
                        value: 'Real',
                        label: 'Real',
                        },
                        {
                        value: 'Dólar',
                        label: 'Dólar',
                        },
                        {
                        value: 'Euro',
                        label: 'Euro',
                        },
                    ]}
                />
                <InputNumber className={styles.input} id='valor1' /*min={1} max={10}*/ defaultValue={0} onChange={setValorAConverter} /*onChange={onChange}*/ />
            </div>
            <div className={styles.saida}>
            <Select className={styles.select}
                    defaultValue="Real"
                    style={{
                        width: 120,
                    }}
                    onChange={selecionado2}
                    options={[
                        {
                        value: 'Real',
                        label: 'Real',
                        },
                        {
                        value: 'Dólar',
                        label: 'Dólar',
                        },
                        {
                        value: 'Euro',
                        label: 'Euro',
                        },
                    ]}
                />
                <InputNumber className={styles.input} value={valorConvertido} id='valor2' /*min={1} max={10}*/ defaultValue={0} /*onChange={onChange}*/ readOnly />
            </div>
        </section>
    )
}

export default Home