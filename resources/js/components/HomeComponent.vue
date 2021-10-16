<template>
  <div>
      <Navbar></Navbar>
      <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './HeaderComponent';
import Footer from './FooterComponent';
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>