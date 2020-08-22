<template>
    <div>
        <h1 class="font-normal text-3xl leading-none">
            Typography
        </h1>

        <input placeholder="token" v-model="token" @keyup.enter="fetchingData">

        <p class="text-red" v-if="message" v-text="message"></p>

        <ul>
            <li
                v-for="achievement in achievements"
                v-text="achievement.title"
            ></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return { achievements: [], token: '', message: '' }
        },

        methods: {
            fetchingData() {
                axios.get(`http://127.0.0.1:8000/api/achievements?api_token=${this.token}`)
                    .catch(error => {
                        this.message = error.response.data.message;
                        this.achievements = [];
                    })
                    .then(({ data }) => {
                        this.achievements = data;
                        this.message = null;
                    })
            }
        }
    }
</script>
