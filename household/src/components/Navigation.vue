<template>
  <div>
    <nav class="bg-white shadow-lg fixed w-full z-10 top-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
      
        <!-- Applicant Navbar -->
        <div v-if="user && user.accountType === 'Applicant'" class="flex h-16 items-center">
          <div class="flex-shrink-0">
            <a href="/" class="text-lg font-bold text-gray-900">Households</a>
          </div>
  
           <div :class="{'hidden md:flex flex-1 justify-center space-x-6': !showMobileMenu, 'flex flex-col  bg-white absolute top-16 left-0 right-0 shadow-lg': showMobileMenu}" >
              <router-link @click="showMobileMenu = false" :class="{'text-indigo-900 hover:text-gray-900 font-medium block md:hidden': !showMobileMenu,
              'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block ml-10 my-2 md:my-0 md:hidden': showMobileMenu }" :to="{ name: 'Profile', params:{ id:user.id} }">
                 Profile
              </router-link>

              <router-link @click="showMobileMenu = false" :class="{'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block': !showMobileMenu,
              'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block ml-10 my-2 md:my-0': showMobileMenu }" :to="{ name: 'Jobs' }">
                Jobs 
              </router-link>
              
              <router-link @click="showMobileMenu = false" :class="{'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block': !showMobileMenu,
              'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block ml-10 my-2 md:my-0': showMobileMenu }" :to="{ name: 'Saved-Jobs' }">
                Saved Jobs 
              </router-link>
  
              <router-link @click="showMobileMenu = false" :class="{'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block': !showMobileMenu,
              'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block ml-10 my-2 md:my-0': showMobileMenu }" :to="{ name: 'Post' }">
                Post 
              </router-link>
  
              <a  @click="showMobileMenu = false" :class="{'text-indigo-900 hover:text-gray-900 font-medium block md:hidden': !showMobileMenu,
              'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block ml-10 my-2 md:my-0 cursor-pointer': showMobileMenu }">
                <p @click="logout">logOut</p>
              </a>
           </div>
  
           <div class="hidden md:block">
                <div class="relative">
                  <button class="flex items-center text-gray-800" @click="showDropdown = !showDropdown">
                    <img :src="user.image" alt="Profile image" class="w-8 h-8 rounded-full mr-5">
                  </button>
  
                  <div v-if="showDropdown" id="dropdown-menu" class="absolute top-full right-0 mt-2 py-2 bg-white rounded-md shadow-lg z-10">
                    <router-link @click="showDropdown = false"  :to="{ name: 'Profile', params:{ id:user.id} }" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</router-link>
                    <a @click="logout" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Logout</a>
                  </div>
                </div>
           </div>
  
  
          <div class="md:hidden ml-auto">
            <button @click="showMobileMenu = !showMobileMenu" class="flex items-center px-3 py-2 border rounded text-gray-500 hover:text-gray-900 focus:outline-none" aria-label="Toggle Menu">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

       
  
        <!-- Homeowner Navbar -->
        <div v-else-if="user && user.accountType === 'Homeowner'"  class="flex h-16 items-center">
          <div class="flex-shrink-0">
            <a href="/" class="text-lg font-bold text-gray-900">Households</a>
          </div>
  
            <div :class="{'hidden md:flex flex-1 justify-center space-x-6': !showMobileMenu, 'flex flex-col  bg-white absolute top-16 left-0 right-0 shadow-lg': showMobileMenu}" >
              <router-link  @click="showMobileMenu = false" :class="{'text-indigo-900 hover:text-gray-900 font-medium block md:hidden': !showMobileMenu,
              'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block ml-10 my-2 md:my-0 md:hidden': showMobileMenu }" :to="{ name: 'Profile', params:{ id:user.id} }">
                 Profile
              </router-link>

              <router-link @click="showMobileMenu = false" :class="{'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block': !showMobileMenu,
              'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block ml-10 my-2 md:my-0': showMobileMenu }" :to="{ name: 'Jobs' }">
                Jobs 
              </router-link>
              
              <router-link  @click="showMobileMenu = false" :class="{'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block': !showMobileMenu,
              'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block ml-10 my-2 md:my-0': showMobileMenu }" :to="{ name: 'Create-job-listing' }">
                Create Job Listing 
              </router-link>
  
              <router-link  @click="showMobileMenu = false" :class="{'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block': !showMobileMenu,
              'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block ml-10 my-2 md:my-0': showMobileMenu }" :to="{ name: 'Post' }">
                Post 
              </router-link>
  
              <a  @click="showMobileMenu = false" :class="{'text-indigo-900 hover:text-gray-900 font-medium block md:hidden': !showMobileMenu,
              'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block ml-10 my-2 md:my-0 cursor-pointer': showMobileMenu }">
                <p @click="logout">logOut</p>
              </a>
           </div>
  
           <div class="hidden md:block">
                <div class="relative">
                  <button class="flex items-center text-gray-800" @click="showDropdown = !showDropdown">
                    <img :src="user.image" alt="Profile image" class="w-8 h-8 rounded-full mr-5">
                  </button>
  
                  <div v-if="showDropdown" id="dropdown-menu" class="absolute top-full right-0 mt-2 py-2 bg-white rounded-md shadow-lg z-10">
                    <router-link @click="showDropdown = false" :to="{ name: 'Profile', params:{ id:user.id} }" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</router-link>
                    <a @click="logout" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Logout</a>
                  </div>
                </div>
           </div>
  
          <div class="md:hidden ml-auto">
            <button @click="showMobileMenu = !showMobileMenu" class="flex items-center px-3 py-2 border rounded text-gray-500 hover:text-gray-900 focus:outline-none" aria-label="Toggle Menu">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>



        <div v-if="!user" class="flex h-16 items-center">
          <div class="flex-shrink-0">
            <a href="/" class="text-lg font-bold text-gray-900">Households</a>
          </div>
    
          <div :class="{'hidden md:flex flex-1 justify-center space-x-6': !showMobileMenu, 'flex flex-col  bg-white absolute top-16 left-0 right-0': showMobileMenu}" >
              <router-link @click="showMobileMenu = false" :class="{'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block': !showMobileMenu,
              'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block ml-10 my-2 md:my-0': showMobileMenu }" :to="{ name: 'home' }">
                  Home
              </router-link>
             
             <div class="relative" @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
                <div class="cursor-pointer" :class="{'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block my-2 md:my-0': !showMobileMenu,
                  'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block ml-10 my-2 md:my-0': showMobileMenu }">
                  Jobs
                </div>
                <div class="drop absolute z-10 top-full left-0 w-48 py-2 bg-white rounded-lg shadow-lg" v-show="showDropdown" :class="{ 'right-0': showMobileMenu }" :style="{ 'padding-top': showDropdown ? '20px' : '' }">
                  <router-link @click="showMobileMenu = false" class="block px-4 py-2 text-gray-800 hover:bg-gray-200" :to="{ name: 'HowToFindJob' }">
                    How to Find a Job
                  </router-link>
                  <router-link @click="showMobileMenu = false" class="block px-4 py-2 text-gray-800 hover:bg-gray-200" :to="{ name: 'HowToCreateJob' }">
                    How to List a Job
                  </router-link>
                </div>
             </div>
             
              <router-link @click="showMobileMenu = false" :class="{'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block': !showMobileMenu,
              'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block ml-10 my-2 md:my-0': showMobileMenu }" :to="{ name: 'contact' }">
                Contact
              </router-link>

              <div class="space-x-6">
              <router-link @click="showMobileMenu = false" :class="{'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block': !showMobileMenu,
              'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block ml-10 my-2 md:my-0': showMobileMenu }" :to="{ name: 'AccountType' }">
                Signup
              </router-link>

              <router-link @click="showMobileMenu = false" :class="{'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block': !showMobileMenu,
              'text-indigo-900 hover:text-gray-900 font-medium block md:inline-block ml-10 my-2 md:my-0': showMobileMenu }" :to="{ name: 'Login' }">
                Login
              </router-link>
            </div>
          </div>
  
        
          <div class="md:hidden ml-auto">
            <button @click="showMobileMenu = !showMobileMenu" class="flex items-center px-3 py-2 border rounded text-gray-500 hover:text-gray-900 focus:outline-none" aria-label="Toggle Menu">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>  
  
      </div>
    </nav>
    <router-view />
  </div>
  </template>

<script>
export default {
  data() {
      return {
        showMobileMenu: false,
        showDropdown: false,
        
      }
  },
  computed: {
  user() {
    return this.$store.state.user;
  },
  },
  created() {
    console.log(this.$store.state.user);
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    logout() {
      localStorage.removeItem('user');
      this.$store.commit('LOGOUT')
      this.$router.push({ name: "home" });
    },
  }
};
</script>




<style>
@media (max-width: 640px) {
  .drop.right-0 {
    left: unset;
    left: 110px;
    top: -10px;
  }
}
</style>