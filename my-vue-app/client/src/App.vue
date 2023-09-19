<template>
  <div id="app">
    <div class="overlay" >
      <header class="top-banner">
        <div class="logo">
          <!--Banner Logo image -->
          <img src="logo1.png" alt="Logo" />
        </div>
        <div class="registerButton">
          <!--Banner Button and Logo -->
          <button>{{ message.register }}</button>
          <img src="user-circle.png" alt="Logo" />
        </div>
      </header>
      <!--Page Content-->
      <body class="content">
        <h1 class="money">{{ message.money }}</h1>
        <h2 class="deposit">{{ message.deposit }}</h2>
          <div class="signupButton">
            <button>{{ message.sign }}</button>
          </div>
      </body>
    </div>
  </div>
</template>

<!--Data from backend-->
<script>
export default {
  data() {
    return {
      message: '',
    };
  },
  created() {
    this.fetchMessage();
  },
  methods: {
    async fetchMessage() {
      try {
        const response = await fetch('http://localhost:3000/api/page');
        const data = await response.json();
        this.message = data.message;
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    },
  },
};
</script>

<!--Styling for webpage-->
<style>
#app {
  background-image: url('Background.jpg');
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center; 
  border-width: 0;
  max-height: fit-content;
  position: relative;
  color: #5a057a;
  font-family: "Calibri", Times, serif;
}

#app::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 10%, rgba(0, 0, 0, 0.7) 100%);
  z-index: 1;
} 

.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Styles for the top banner */
.top-banner {
  align-items: top;
  overflow: hidden;
  background-color: #333;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 10px 20px; 
}

.logo {
  float: right;
  max-width: 100px; 
}

.registerButton button{
  background-color: #8416ac; 
  color: white; 
  border: none;
  padding: 25px 40px; 
  margin-right: 50px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  font-size: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
}

.registerButton img{
  padding-top: 5px;
}

.signupButton button{
  background-color: #8416ac; 
  color: white; 
  border: none;
  padding: 55px 200px;
  text-align: center;
  margin-bottom: 30px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  font-size: 50px;
  z-index: 2;
}

.button button:hover {
  background-color: #5a057a ; 
}

.content{
  padding-top:900px;
  text-align: center;
  z-index: 2;
  position: relative;
}

.money{
  font-weight: bold;
  font-size: 400px;
  color: white;
  margin-bottom: 1px;
  z-index: 2;
}

.deposit{
  font-weight: bold;
  font-size: 200px;
  color: white;
  margin-top:1px;
  margin-bottom:10px;
  z-index: 2;
}

/* Responsive design for tablet and mobiles */
@media screen and (max-width: 1024px) {
  .top-banner {
    padding: 10px;
  }
  .logo {
    max-width: 80px;
  }
  .registerButton button {
    padding: 15px 30px;
    font-size: 16px;
  }
  .signupButton button {
    padding: 30px 100px;
    font-size: 30px;
  }
  .money {
    font-size: 200px;
  }
  .deposit {
    font-size: 100px;
  }
}

@media screen and (max-width: 768px) {
  .top-banner {
    padding: 5px;
  }
  .logo {
    max-width: 60px;
  }
  .registerButton button {
    padding: 10px 20px;
    font-size: 14px;
  }
  .signupButton button {
    padding: 20px 80px;
    font-size: 24px;
  }
  .money {
    font-size: 100px;
  }
  .deposit {
    font-size: 50px;
  }
}

</style>