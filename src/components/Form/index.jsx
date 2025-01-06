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
        { limite: 18.5, classificacao: `Abaixo do peso`, conteudo: `abaixo do peso, isso se dá por`, cor: styles.baixoPeso, detalhe: `até 18.5,` },
        { limite: 24.9, classificacao: `Peso normal`, conteudo: `com peso normal, isso se dá por`,cor: styles.pesoNormal, detalhe: `até 24.9,` },
        { limite: 29.9, classificacao: `Sobrepeso`, conteudo: `com sobrepeso, isso se dá por`,cor: styles.sobrepeso, detalhe: `até 29.9,` },
        { limite: 34.9, classificacao: `Obesidade grau I.`, conteudo: `acima do peso, isso se dá por`,cor: styles.obesidadeI, detalhe: `até 34.9,` },
        { limite: 39.9, classificacao: `Obesidade grau II.`, conteudo: `acima do peso, isso se dá por`,cor: styles.obesidadeII, detalhe: `até 39.9,` },
        { limite: 40, classificacao: `Obesidade grau III.`, conteudo: `acima do peso, isso se dá por`,cor: styles.obesidadeIII, detalhe: `acima de 40,` },
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
                                <p className='titulo'>{classificacaoIMC.classificacao}</p>
                                <span className='subtitulo'>{classificacaoIMC.detalhe}</span>
                                <div className='icone-info'>ico</div>
                                <p>
                                    Segundo a OMS você está {classificacaoIMC.conteudo}
                                </p>
                            </div>
                        )}
                    </>
                )
            )}
        </>
    );
};

export default IMC;