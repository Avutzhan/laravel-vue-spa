<template>
    <div>
        <h1 class="font-normal text-3xl leading-none">
            Laracasts Stats
        </h1>

        <ul>
            <li><strong>Total Series:</strong> {{ series }}</li>
            <li><strong>Total Lessons:</strong> {{ lessons }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                series: 0,
                lessons: 0
            };
        },

        created() {
            // axios.get('http://127.0.0.1:8000/api/stats').then(response => {
            //     let { data } = response;
            //
            //     this.series = data.series;
            //     this.lessons = data.lessons;
            // });
            // axios.get('http://127.0.0.1:8000/api/stats').then(({ data }) => {
            //     this.series = data.series;
            //     this.lessons = data.lessons;
            // });
            axios.get('http://127.0.0.1:8000/api/stats')
                .then(response => response.data)
                .then(data => {
                    this.series = data.series;
                    this.lessons = data.lessons;
                });

        }
    };
</script>
