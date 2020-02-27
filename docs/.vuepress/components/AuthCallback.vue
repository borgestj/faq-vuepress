<template>
  <p>Redirecting after login...</p>
</template>

<script>
export default {
  async beforeMount() {
    // Process the auth tokens
    await this.$auth.handleAuthentication();

    // get the redirect path from local storage
    const path = this.$auth.getFromUri();

    // redirect browser to the original page
    window.location.replace( path );
  }
}
</script>