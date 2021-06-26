<img alt="Ignite" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2fbacb7a-e460-44a3-8fc5-e66f96dae148%2Fcover-reactjs.png?table=block&id=51e4099a-6e2f-4d4b-ae94-f9fe75bb769d&width=5120&userId=1b109781-8635-4162-80d6-714377721793&cache=v2" />

<h3 align="center">
Challenge 03: Creating a shopping cart hook
</h3>

<p align="center">
   <a href="https://www.linkedin.com/in/leonne-sousa-brito/">
      <img alt="LeonneBrito" src="https://img.shields.io/badge/-LeonneBrito-5965e0?style=flat&logo=Linkedin&logoColor=white" />
   </a>
  <img alt="Languages" src="https://img.shields.io/github/languages/count/LeonneBrito/challenge05-ignite-bootcamp-reactjs?color=%235963C5" />
  <img alt="repo-size" src="https://img.shields.io/github/repo-size/LeonneBrito/challenge05-ignite-bootcamp-reactjs?color=%235761C3" />
  <img alt="lastcommit" src="https://img.shields.io/github/last-commit/LeonneBrito/challenge05-ignite-bootcamp-reactjs?color=%235761C3" />
  <img alt="License" src="https://img.shields.io/github/license/LeonneBrito/challenge05-ignite-bootcamp-reactjs?color=%235E69D7" />
  <img alt="Issues" src="https://img.shields.io/github/issues/LeonneBrito/challenge05-ignite-bootcamp-reactjs?color=%235965E0">
  <a href="mailto:britoleonne@gmail.com">
   <img alt="Email" src="https://img.shields.io/badge/-britoleonn%40gmail.com-%23525DCB" />
  </a>
</p>

## :rocket: About the challenge

In this challenge, you should create an application to train what you've learned so far in ReactJS

This will be an application ondewhere your main objective is to add some code snippets so that the image upload application works correctly. You will receive an application with many features and styles already implemented. It must perform requests for its own Next.js API which will return data from FaunaDB (database) and ImgBB (image hosting service). The implemented interface must follow the Figma layout. You will have access to 4 files to implement:

- Infinite Queries and Mutations with React Query;
- Submission of form with React Hook Form;
- Modal and Toast display with Chakra UI;
- Between others.

## :construction_worker: Preparing for the challenge

For this challenge, we are going to reinforce some points and introduce some libs to help you in development.

Starting with the project theme: uploading images. As the development from scratch would lead to a very large project, we provide in the template most of the project already implemented so that you only have to work with 4 files. The idea is that in these 4 files you have a little contact with the 3 main points we want to address in this project: React Query, React Hook Form and Chakra UI.

So, before going directly to the challenge code, we'll briefly explain how each of the points below are important to the challenge:

- React Query;
- React Hook Form;
- ImgBB;
- FaunaDB;
- Next.js API;
- Figma.

### React Query

Na aplicação do desafio, você vai lidar com Infinite Queries, Mutations e Invalidações. Ao longo da seção **[O que devo editar na aplicação](https://www.notion.so/Desafio-02-Upload-de-imagens-4cf1c3b1c1ad4a66961b6e48558cc3b8)** iremos mencionar quando cada uma dessas funcionalidades será utilizada, mas já vamos entender um pouquinho o papel de cada uma delas na nossa aplicação:

- **Infinite Queries**: Listagem que adiciona mais dados ao clicar em um botão de carregamento ou "infinite scroll". Ela será utilizada nessa aplicação para realizar o carregamento das imagens cadastradas no nosso banco. O carregamento foi implementado com um clique em um botão, não o "infinite scroll" (já fica aí a sugestão de um extra para o desafio).
- **Mutations**: Diferente das queries do React Query que são utilizadas normalmente para a busca de dados, as mutations são responsáveis pela criação/edição/remoção de dados. Ela será utilizada nessa aplicação para o cadastro de uma nova imagem no banco.
- **Invalidações**: Utilizada para marcar manualmente uma query como `stale` e forçar a atualização dos dados. Ela será utilizada nessa aplicação para marcar a query de listagem de imagens como `stale` quando a mutation de cadastrar uma nova imagem ocorrer com sucesso.


### React Hook Form

In the application of the challenge, you will need to implement the registration of inputs from the image registration form, the validations and send the errors of these inputs.

Unlike what was seen in the journey, this time you should work with validations directly in the React Hook Form instead of using a Yup `resolver`.

### ImgBB

For the storage of challenge images, we decided to use a free and easy-to-use file hosting solution called ImgBB. It's not the best solution for this type of hosting, but it's the easiest for you to implement.

Therefore, to be able to upload images to this platform you need to follow 3 steps:

1. [Create an account](https://imgbb.com/login) on ImgBB;
2. [Create your key](https://api.imgbb.com/) from the API;
3. Copy the value of this key and paste it into your `.env.local` as follows:

`NEXT_PUBLIC_IMGBB_API_KEY=COPY_KEY_VALUE`

### FaunaDB

For the storage of image information (url, title and description), we decided to use the FaunaDB already used by you along the journey. All you need to do is create a database in FaunaDB with a name of your choice that **needs** to have a collection called `images`. With the database and collection created, you just create and copy the bank key in your `.env.local` file as follows:

`FAUNA_API_KEY=VALUE_OF_COPY_KEY`

This way you should be able to register the information of the images in FaunaDB.

### Next.js API

In this challenge, the entire Next.js API has already been implemented for you, but let's quickly explain what was done in this step so that you understand the data you must send and the data you will receive when making requests.

- **GET api/images**: This is the route used to list the images. This route receives a `query param` named `after` which indicates if there is more data to be loaded from FaunaDB. By default, it was defined that the paging of the FaunaDB response is 6 data. The API response is a `json` with two values:

- **date**: Formatted data of images registered in FaunaDB, example:

```jsx
  "date": [
    {
      "title": "Doge",
      "description": "The best doge",
      "url": "https://i.ibb.co/K6DZdXc/minh-pham-LTQMgx8t-Yq-M-unsplash.jpg",
      "ts": 1620222828340000,
      "id": "294961059684418048"
    },
  ]
```
- **after**: Reference to the next data page if you have more images to load from FaunaDB. Otherwise, it returns `null`.

- **POST api/images**: This is the route used to register image information (url, title and description) in FaunaDB. All you need to send is these three data by `body` that the registration will take place and, if everything goes well, it will return a message `success: true`.

# :page_facing_up: License

This project is under a license [MIT](./LICENSE).

Challenge proposed with 💜 by Rocketseat 👋 [Join this great community!](https://discordapp.com/invite/gCRAFhc)
