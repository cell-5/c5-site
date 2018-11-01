<template>
  <div id="careers">
    <Header></Header>
    <main role="main">
      <section class="careers">
        <div class="container">
          <div class="row justify-content-md-center align-items-center">
            <div class="col-lg-11 row careers-heading">
              <h3>careers</h3>
            </div>
              <transition-group name="list" tag="div" class="col-lg-11 row">>
                <div v-for="(position, index) in this.items" :key="index" class="position-item justify-content-md-center client col-md-6">
                  <div class="careers-position">
                    <div class="card">
                      <div class="card-title">
                        {{ position.title }}
                        <span class="float-right">
                           <i class="fas fa-share-alt"></i>
                        </span>
                      </div>
                      <div class="card-body">
                        <p>{{ position.description }}</p>
                        <p>
                          <span v-for="stat in position.stats" 
                                class="careers-position-stat border border-dark rounded"> 
                            <i v-bind:class="stat.icon"></i> {{ stat.text }}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </transition-group>
          </div>
        </div>
      </section>
      <FooterSection></FooterSection>
    </main>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import FooterSection from './FooterSection.vue'
  import $ from 'jquery'

  function backToTop () {
    $('html,body').animate({
      scrollTop: 0
    }, 500)
  }

  export default {
    name: 'careers',
    data () {
      return {
        items: [],
        positions: [{
          title: 'Back End Developer',
          description: 'A back end web developer is responsible for server-side web application logic and integration of the work front-end developers do. Back-end developers are usually write the web services and APIs used by front-end developers and mobile application developers.',
          stats: [{
            icon: 'fas fa-clock',
            text: '19 hours ago'
          },
          {
            icon: 'fas fa-money-bill',
            text: '$25,000-30,000 a year'
          },
          {
            icon: 'fas fa-briefcase',
            text: 'Full-time'
          }]
        },
        {
          title: 'Front End Developer',
          description: 'A front-end web developer is responsible for implementing visual and interactive elements that users engage with through their web browser when using a web application. They are usually supported by back-end web developers.',
          stats: [{
            icon: 'fas fa-clock',
            text: '14 hours ago'
          },
          {
            icon: 'fas fa-money-bill',
            text: '$25,000-30,000 a year'
          },
          {
            icon: 'fas fa-briefcase',
            text: 'Full-time'
          }]
        },
        {
          title: 'Web Designer',
          description: 'A web designer creates the look, layout, and features of a website. The job involves understanding both graphic design and computer programming. Once a website is created, a designer helps with maintenance and additions to the website.',
          stats: [{
            icon: 'fas fa-clock',
            text: '10 hours ago'
          },
          {
            icon: 'fas fa-money-bill',
            text: '$18,000-24,000 a year'
          },
          {
            icon: 'fas fa-briefcase',
            text: 'Part-time'
          }]
        }],
        counter: 0
      }
    },
    components: {
      Header,
      FooterSection
    },
    mounted () {
      backToTop()
      this.populateList()
    },
    methods: {
      populateList() {
        var vm = this
        setTimeout(function () {    
              vm.items.push(vm.positions[vm.counter])        
              vm.counter++;  
              if (vm.counter < vm.positions.length) {             
                 vm.populateList();             
              }                        
           }, 260)
      }
    }
  }
</script>
<style scoped>
  .careers {
    position: relative;
    background: white;
    margin-top: 4.1rem;
  }

  .careers .container {
    padding-bottom: 5em;
  }
  .careers-heading {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .careers-position {
    margin-top: 14px;
  }
  .careers-position .card {
    padding: 30px;
  }
  .careers-position .card-title {
    text-align: center;

  }
  .careers-position .card-title i {
      cursor: pointer;
  }
  .careers-position .card-body {
    font-size: 0.9em;
  }
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .careers-position-stat {
    padding: 3px 5px;
    margin-left: 5px;
    font-size: 0.86em;
  }

</style>
