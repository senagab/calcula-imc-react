import styles from './form.module.css'

const IMC = ({ altura, peso }) => {
    const verificaCampos = () => {
        if (!altura || !peso || altura === '' || peso === '') {
            return `Adicione valores aos dois campos!`;
        }
        return null;
    };

    const calculo = () => {
        const alturaEmCm = parseInt(altura.replace(',', '.').trim());
        const pesoEmKg = parseInt(peso.replace(',', '.').trim());

        if (isNaN(alturaEmCm) || isNaN(pesoEmKg) || alturaEmCm <= 0 || pesoEmKg <= 0) {
            return null;
        }

        const alturaEmMetros = alturaEmCm / 100;
        const imc = pesoEmKg / (alturaEmMetros * alturaEmMetros);

        if (imc >= 50) {
            return `Erro! Coloque um valor em centímetros!`;
        } else {
            return imc.toFixed(1);
        }
    };

    const tabelaImc = [
        { limite: 18.5, classificacao: `Você está abaixo do peso. Aqui, pegue um hot dog meu amigo!`, cor: styles.baixoPeso },
        { limite: 24.9, classificacao: `Você está com peso normal, continue assim!`, cor: styles.pesoNormal },
        { limite: 29.9, classificacao: `Você está com sobrepeso, vamos fazer alguns exercícios?`, cor: styles.sobrepeso },
        { limite: 34.9, classificacao: `Você está com obesidade grau I.`, cor: styles.obesidadeI },
        { limite: 39.9, classificacao: `Você está com obesidade grau II.`, cor: styles.obesidadeII },
        { limite: 40, classificacao: `Você está com obesidade grau III.`, cor: styles.obesidadeIII },
    ];

    const erro = verificaCampos();
    const imc = calculo();

    // Filtrar a classificação correspondente ao IMC
    const classificacaoIMC = imc && tabelaImc.find(({ limite }) => imc <= limite);

    return (
        <>
            {erro && <h2>{erro}</h2>}
            {typeof imc === 'string' && imc.includes('Erro') ? (
                <h2>{imc}</h2>
            ) : (
                imc && (
                    <>
                        <h2>Seu IMC é: {imc}</h2>
                        {classificacaoIMC && (
                            <div className={classificacaoIMC.cor}>
                                <p>{classificacaoIMC.classificacao}</p>
                            </div>
                        )}
                    </>
                )
            )}
        </>
    );
};

export default IMC;