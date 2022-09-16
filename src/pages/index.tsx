import { GetStaticProps } from 'next'
import Head from 'next/head';

import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../service/stripe';

import styles from './home.module.scss';

// CLIENT SIDE
// SERVER SIDE
// STATIC SIDE GENERATION

// Post do Blog

// Conteudo (SSG)
// COMENTÁRIOS (CLIENT-SIDE)

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {


  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> <span>world.</span></h1>
          <p>
            Get acess to all the publications <br />
            <span> {product.amount} </span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1Li4FZAy7gMYqq0KvF2dy7WE')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}