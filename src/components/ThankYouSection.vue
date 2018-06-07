<template>
    <section id="thank-you">
            <div class="container">
                <div class="text-center">
                    <figure>
                        <img src="../assets/img/logo-white.svg" alt="Cell 5 company logo">
                    </figure>
                    <br>
                    <h1>Thank you for contacting us!</h1>
                    <p>We will get in touch with you soon! <router-link to="/">Back to Homepage</router-link></p>
                </div>
            </div>
        </section>
</template>

<script>
export default {
  name: 'thankyou',
  title: 'Thank You!',
  data () {
    return {
      msg: 'Thank You!!'
    }
  }
}
</script>

<style scoped>
#thank-you {
  background: #2c302e;
  height: 100vh;
  position: relative;
}
#thank-you .container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#thank-you .container h1 {
  color: #d64933;
  margin-bottom: 2rem;
}
#thank-you .container img {
  height: 11em;
}
#thank-you .container p {
  color: white;
  font-size: 1.1em;
}
#thank-you .container a {
  color: white;
  text-decoration: underline;
}
</style>

