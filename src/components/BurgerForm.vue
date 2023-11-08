<template>
    <div>
        <Message :msg="msg" v-show="msg"/>
        <div>
            <form id="burger-form" @submit="createBurger">
                <div class="input-container">
                    <label for="nome">Nome do Cliente:</label> <!-- O v model será para o back-end dps ver o que é nas aulas -->
                    <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite seu nome">
                </div>
                <div class="input-container">
                    <label for="pao">Escolha o pão:</label>
                    <select name="pao" id="pao" v-model="pao">
                        <option value="">Selecione o seu pão</option>
                        <!-- COM A VINDA DOS DADOS DO SERVIDOR AO NOSSO DATA, AQUI VAMOS USAR UM V-FOR PARA PERCORRER O ARRAU QUE FOI ENVIADO PARA PAES EM NOSOS DATA
                        SENDO ASSIM COMO JÁ SABEMOS O USO DE V-FOR TEM UMA VARIAVEL QUE IRÁ PERCORRER O NOSSO ARRAY PAES AGORA, PAO.
                        KEY É NECESSÁRIO ENTÃO COLOCAMOS UM PAO.ID, E EM VALUE DO A OPTION COLOCAMOS O TIPO DO PAO E NA OPÇÃO O TIPO DO PAO DNV
                        ESSES ARQUIVOS SÃO O JSON DO SERVIDOR LA -->
                        <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="carne">Escolha a carne do burger:</label>
                    <!-- V-MODEL PEGA O QUE O USUARIO MARCOU, DIGITOU ETC PARA PODER USAR EM {{ AQUI }} -->
                    <select name="carne" id="carne" v-model="carne">
                        <option value="">Selecione o tipo de carne </option>
                        <option v-for="carne in carnes" key:carne.id :value="carne.tipo">{{ carne.tipo }}</option>
                    </select>
                </div>
                <div id='opcionais-container' class="input-container">
                    <label id="opcionais-title" for="opcionais">Selecione os opcionais:</label>
                    <!-- OBS COLOCAR O V-FOR SEMPRE NO ELEMENTO QUE QUER REPETIR, NESSE CASO É NA NOSSA DIV QUE CONTEM O INPUT E O SPAN -->
                    <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id">
                        <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
                        <span>{{opcional.tipo}}</span>
                    </div>
                </div>
                <div>
                    <div class="input-container">
                        <input type="submit" class="submit-btn" value="Criar meu Burger">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import Message from './Message.vue'
    export default{
        name: 'BurgerForm',
        data(){
            return {
                //DADOS QUE VEM DO SERVIDOR EM PLURAL
                paes: null,
                carnes: null,
                opcionaisdata: null,
                //DADOS EM SINGULAR, DADOS ENVIADOS
                //O USO DO V-MODEL, AO SELECIONAR OUE ESCREVER LA VEM PRA CA, LEMBRAR DINAMICO
                nome: null,
                pao: null,
                carne: null,
                opcionais: [],
                msg: null
            }
        },
        components:{
            Message,
        },
        methods:{
            //METODO QUE FAZE A REQUISIÇÃO GET E PEGA OS DADOS DO BACKEND CRIADA NO NOSSO LOCALHOST
            async getIngredientes(){
                const req = await fetch('http://localhost:3000/ingredientes');
                const data = await req.json();

                //DADOS DO SERVIDOR QUE VÃO PREENCHER OS DADOS DO NOSSO DATA ACIMA
                this.paes= data.paes;
                this.carnes= data.carnes;
                this.opcionaisdata= data.opcionais
            },
            async createBurger(e){
                //PREVINE O EVENTO
                e.preventDefault();

                const data = {
                    nome: this.nome,
                    carne: this.carne,
                    pao: this.pao,
                    /* Como eleé feito como array la em cima temos que criar ele como array */
                    opcionais: Array.from(this.opcionais),
                    status: 'Solicitado'
                }

                //MANDA O TEXTO COM FORMATO DE TEXTO PRO SV
                const dataJson = JSON.stringify(data)
                //ENVIANDO OS DADOS POR POST
                const req = await fetch('http://localhost:3000/burgers',{
                    method: 'POST',
                    headers: {'Content-Type': 'application/JSON'},
                    body: dataJson
                });
                //VE A RESPOSTA DO REQ
                const res = await req.json()

                this.msg = `Pedido N° ${res.id} realizado com sucesso!`

                setTimeout(() => this.msg='', 3000)

                this.nome = '';
                this.pao = '';
                this.carne = ''
                this.opcionais = ''
            }
        },
        //QUANDO O COMPONENTE É INICIALIZADO O QUE ESTÁ EM MOUNTED VAI SER EXECUTADO
        mounted(){
            this.getIngredientes()
        }
    }
</script>

<style scoped>
    #burger-form{
        max-width: 400px;
        margin: 0 auto;
    }
    .input-container{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        
       
    }

    label{
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid #FCBA03;
        margin: 10px 50px
        
    }

    input, select{
        padding: 5px 10px;
        width: 300px;
        margin:0 auto;
        
    }

    #opcionais-container{
        flex-direction: row;
        flex-wrap: wrap;
    }
    #opcionais-title{
        width: 100%;
    }

    .checkbox-container{
        display: flex;
        align-items: flex-start;
        width: 40%;
        margin-bottom: 20px;
    }

    .checkbox-container input{
        margin: 0;
        position: relative;
        z-index: 2;
        
    }

    .checkbox-container span{
        font-weight: bold;
        margin: 0px;
        position: absolute;
        padding: 0 90px;
        z-index: 1;
    }

    .checkbox-container span{
        margin-left: 6px;
        font-weight: bold;
    }

    .submit-btn{
        background-color: #222;
        color: #FCBA03;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
    }

    .submit-btn:hover{
        background-color: transparent;
        color: #222;
    }
</style>