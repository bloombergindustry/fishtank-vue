<script>
// import axios from 'axios'

/** Event fired on request error
 * @event error
 * @type {Event}
 */

/** Triggered when request succeeds and pass server response
 * @event success
 * @type {Event}
 */

export default {
  name: 'DataFetcher',
  props: {
    /**
     * Enable request caching
     */
    enableCache: Boolean,

    /**
     * Url to request data from, will make new request when changed
     */
    url: String
  },
  data () {
    return {
      cache: {},
      fetchedData: { data: {} },
      lastRequest: '',
      loading: false
    }
  },
  watch: {
    url (newValue) {
      this.lastRequest = newValue
      if (!this.loading && newValue) this._request(newValue)
    }
  },
  created () {
    if (this.url) {
      this.lastRequest = this.url
      this._request(this.url)
    }
  },
  methods: {
    /**
     * Force refetch (clears cached value before fetching)
     */
    refetch () {
      return new Promise((resolve, reject) => {
        delete this.cache[this.url]
        this.lastRequest = this.url
        this._request(this.url).then(resolve).catch(reject)
      })
    },

    _request (url) {
      return new Promise((resolve, reject) => {
        this.loading = true

        if (this.cache[url]) {
          this.fetchedData = this.cache[url]
          this.loading = false
          resolve(this.fetchedData)
        } else {
          // axios
          //   .get(url)
          //   .then(res => {
          //     this.fetchedData = res.data
          //     if (this.enableCache) this.cache[url] = res.data
          //     this.$emit('success', res)
          //     resolve(res.data)
          //   })
          //   .catch(res => {
          //     this.$emit('error', res)
          //     reject(res.data)
          //   })
          //   .finally(() => {
          //     this.loading = false
          //     if (this.lastRequest !== url) this._request(this.lastRequest)
          //   })
        }
      })
    }
  },
  render () {
    return this.$scopedSlots.default({
      loading: this.loading,
      fetchedData: this.fetchedData
    })
  }
}
</script>