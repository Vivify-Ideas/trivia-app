<template>
  <div class="container">
    <select
      class="custom-select"
      size="10"
      @change="onCategoryChanged"
    >
      <option
        v-for="triviaCategory in triviaCategories"
        :key="triviaCategory.id"
        :value="triviaCategory.id">
        {{ triviaCategory.title }}
      </option>
    </select>
    <div class="accordion">
      <div
        class="card"
        v-for="trivia in trivias"
        :key="trivia.id"
        @click="toggleTrivia(trivia.id)"
      >
        <div class="card-header">
          <h5 class="mb-0">
            {{ trivia.question }}
          </h5>
        </div>

        <div
          class="collapse"
          :class="{ 'show': isVisibleTriviaAnswer(trivia.id) }"
        >
          <div class="card-body">
            {{ trivia.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TriviaApp',
  data() {
    return {
      selectedTriviasIds: []
    };
  },
  computed: {
    ...mapGetters({
      trivias: 'getTrivias',
      triviaCategories: 'getTriviaCategories'
    })
  },
  methods: {
    ...mapActions([
      'fetchTrivias',
      'fetchTriviaCategories'
    ]),
    toggleTrivia(triviaId) {
      let triviaIdIndex = this.selectedTriviasIds.indexOf(triviaId);
      let isSelectedTriviaId = triviaIdIndex > -1;
      if (isSelectedTriviaId) {
        return this.selectedTriviasIds.splice(triviaIdIndex, 1);
      }
      this.selectedTriviasIds.push(triviaId);
    },
    isVisibleTriviaAnswer(triviaId) {
      return this.selectedTriviasIds.indexOf(triviaId) > -1;
    },
    onCategoryChanged(event) {
      this.fetchTrivias(event.target.value);
    }
  },
  created() {
    this.fetchTrivias();
    this.fetchTriviaCategories();
  }
}
</script>
