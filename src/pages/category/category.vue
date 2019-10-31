<template>
  <div class="wrapper">
    <ul class="content">
      <li>标题1</li>
      <li>标题2</li>
      <li>标题3</li>
      <li>标题4</li>
      <li>标题5</li>
      <li>标题6</li>
      <li>标题7</li>
      <li>标题8</li>
      <li>标题9</li>
      <li>标题10</li>
      <li>标题11</li>
      <li>标题12</li>
      <li>标题13</li>
      <li>标题14</li>
      <li>标题15</li>
      <li>标题16</li>
      <li>标题17</li>
      <li>标题18</li>
      <li>标题19</li>
      <li>标题20</li>
      <li>标题21</li>
      <li>标题22</li>
      <li>标题23</li>
      <li>标题24</li>
      <li>标题25</li>
      <li>标题26</li>
      <li>标题27</li>
      <li>标题28</li>
      <li>标题29</li>
      <li>标题30</li>
      <li>标题31</li>
      <li>标题32</li>
      <li>标题33</li>
      <li>标题34</li>
      <li>标题35</li>
      <li>标题36</li>
      <li>标题37</li>
      <li>标题38</li>
      <li>标题39</li>
      <li>标题40</li>
      <li>标题41</li>
      <li>标题42</li>
      <li>标题43</li>
      <li>标题44</li>
      <li>标题45</li>
      <li>标题46</li>
      <li>标题47</li>
      <li>标题48</li>
      <li>标题49</li>
      <li>标题50</li>
      <li>标题51</li>
      <li>标题52</li>
      <li>标题53</li>
      <li>标题54</li>
      <li>标题55</li>
      <li>标题56</li>
      <li>标题57</li>
      <li>标题58</li>
      <li>标题59</li>
      <li>标题60</li>
      <li>标题61</li>
      <li>标题62</li>
      <li>标题63</li>
      <li>标题64</li>
      <li>标题65</li>
      <li>标题66</li>
      <li>标题67</li>
      <li>标题68</li>
      <li>标题69</li>
      <li>标题70</li>
      <li>标题71</li>
      <li>标题72</li>
      <li>标题73</li>
      <li>标题74</li>
      <li>标题75</li>
      <li>标题76</li>
      <li>标题77</li>
      <li>标题78</li>
      <li>标题79</li>
      <li>标题80</li>
      <li>标题81</li>
      <li>标题82</li>
      <li>标题83</li>
      <li>标题84</li>
      <li>标题85</li>
      <li>标题86</li>
      <li>标题87</li>
      <li>标题88</li>
      <li>标题89</li>
      <li>标题90</li>
      <li>标题91</li>
      <li>标题92</li>
      <li>标题93</li>
      <li>标题94</li>
      <li>标题95</li>
      <li>标题96</li>
      <li>标题97</li>
      <li>标题98</li>
      <li>标题99</li>
      <li>标题100</li>
    </ul>
  </div>
</template>

<script>
  //引入Better-scroll插件
  import BScroll from 'better-scroll'

  export default {
    name: "category",
    mounted() {
      this.scroll = new BScroll(document.querySelector('.wrapper'), {
        probeType: 2,
        pullUpLoad: true
      })

      this.scroll.on('scroll', (position) => {
        console.log(position)
      })

      this.scroll.on('pullingUp', () => {
        console.log(7456)
        this.scroll.finishPullUp()
      })
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 200px;
    overflow: hidden;
  }
</style>