<template>
  <div class="hero-form">
    <TextInput id="name" label="Имя" v-model="localFormData.name" />
    <DateInput id="age" label="Возраст" v-model="localFormData.age" />
    <NumberInput id="height" label="Рост" v-model="localFormData.height" />
    <RadioInput
      id="gender"
      label="Пол"
      :options="genderOptions"
      v-model="localFormData.gender"
    />
    <CheckBoxInput
      id="isMasterCharacter"
      label="Обладает волей???"
      v-model="localFormData.isMasterCharacter"
    />
    <SelectInput
      id="race"
      label="Раса"
      :options="raceList"
      v-model="localFormData.race"
    />
    <SelectInput
      id="class"
      label="Класс"
      :options="classList"
      v-model="localFormData.class"
    />
    <div>
      <label>Таланты:</label>
      <CheckBoxInput
        v-for="talent in talentsList"
        :key="talent.value"
        :id="talent.value"
        :label="talent.text"
        v-model="localFormData.talents"
        :talent="talent.value"
      />
    </div>
    <ColorInput
      id="hairColor"
      label="Цвет волос"
      v-model="localFormData.hairColor"
    />
    <TextareaInput
      id="biography"
      label="Биография"
      v-model="localFormData.biography"
    />

    <!-- <button @click="syncForm" :disabled="isEqual">Синхронизировать</button> -->
    <button @click="syncForm">Синхронизировать</button>
  </div>
</template>

<script>
import CheckBoxInput from "./Inputs/CheckBoxInput.vue";
import ColorInput from "./Inputs/ColorInput.vue";
import DateInput from "./Inputs/DateInput.vue";
import NumberInput from "./Inputs/NumberInput.vue";
import RadioInput from "./Inputs/RadioInput.vue";
import SelectInput from "./Inputs/SelectInput.vue";
import TextareaInput from "./Inputs/TextareaInput.vue";
import TextInput from "./Inputs/TextInput.vue";

export default {
  props: {
    formData: Object,
    isEqual: Boolean,
  },
  components: {
    TextInput,
    TextareaInput,
    SelectInput,
    RadioInput,
    NumberInput,
    DateInput,
    ColorInput,
    CheckBoxInput,
  },
  data() {
    return {
      localFormData: { ...this.formData },
      genderOptions: [
        { value: "male", text: "Мужской" },
        { value: "female", text: "Женский" },
      ],
      raceList: [
        { value: "human", text: "Человек" },
        { value: "fishman", text: "Рыбо-человек" },
        { value: "giant", text: "Гигант" },
        { value: "mink", text: "Минк" },
        { value: "skypiean", text: "Небесный житель (Скайпиан)" },
        { value: "longarm", text: "Длиннорукий" },
        { value: "longleg", text: "Длинноногий" },
        { value: "dwarf", text: "Карлик (Тонтатта)" },
        { value: "merfolk", text: "Русалка/Тритон" },
        { value: "wotan", text: "Вотан (гибрид гиганта и рыбо-человека)" },
        { value: "lunarian", text: "Лунарианец" },
        { value: "snake-neck", text: "Змее-шеий" },
        { value: "three-eyed", text: "Трехглазый" },
      ],
      classList: [
        { value: "swordsman", text: "Мечник" },
        { value: "navigator", text: "Навигатор" },
        { value: "sniper", text: "Снайпер" },
        { value: "chef", text: "Повар" },
        { value: "doctor", text: "Доктор" },
        { value: "archaeologist", text: "Археолог" },
        { value: "shipwright", text: "Корабел" },
        { value: "musician", text: "Музыкант" },
        { value: "captain", text: "Капитан" },
        { value: "martial_artist", text: "Мастер боевых искусств" },
        { value: "assassin", text: "Ассасин" },
        { value: "thief", text: "Вор" },
        { value: "sharpshooter", text: "Меткий стрелок" },
        { value: "devil_fruit_user", text: "Обладатель дьявольского фрукта" },
        { value: "strategist", text: "Стратег" },
        { value: "merchant", text: "Торговец" },
        { value: "engineer", text: "Инженер" },
        { value: "brawler", text: "Драчун" },
        { value: "explorer", text: "Исследователь" },
      ],
      talentsList: [
        { value: "swordsmanship", text: "Владение мечом" },
        { value: "marksmanship", text: "Использование огнестрельного оружия" },
        { value: "navigation", text: "Навигация и картография" },
        { value: "cooking", text: "Кулинария (повар на борту)" },
        { value: "acrobatics", text: "Боевая акробатика" },
        { value: "hypnotism", text: "Гипнотизирование" },
        { value: "martial_arts", text: "Мастерство рукопашного боя" },
        { value: "poneglyph_reading", text: "Чтение Понеглифов" },
        { value: "devil_fruit_mastery", text: "Владение дьявольским фруктом" },
        {
          value: "haki_mastery",
          text: "Гаки (наблюдение, вооружение, завоевание)",
        },
        { value: "medical_skills", text: "Медицинские навыки" },
        { value: "spear_mastery", text: "Владение копьем и алебардой" },
        { value: "swimming_and_diving", text: "Плавание и дайвинг" },
        {
          value: "musical_skills",
          text: "Музыкальные навыки (например, игра на скрипке или гитаре)",
        },
        {
          value: "mechanics_and_shipbuilding",
          text: "Механика и кораблестроение",
        },
        {
          value: "stealth_and_disguise",
          text: "Навыки маскировки и скрытности",
        },
        { value: "leadership", text: "Лидерство и командование" },
        { value: "ship_repair", text: "Ремонт и обслуживание кораблей" },
        { value: "pirate_tactics", text: "Пиратская тактика" },
        { value: "storm_sailing", text: "Плавание по штормам и ураганам" },
        { value: "theft", text: "Кража и воровство" },
        { value: "ship_command", text: "Управление кораблем" },
        {
          value: "strategic_analysis",
          text: "Анализ и стратегическое планирование",
        },
        { value: "negotiation_skills", text: "Умение вести переговоры" },
        { value: "animal_training", text: "Дрессировка животных" },
        { value: "trap_creation", text: "Создание тактических ловушек" },
        { value: "island_survival", text: "Выживание на необитаемых островах" },
        { value: "lockpicking", text: "Взлом замков и сундуков" },
        { value: "manipulation", text: "Манипуляция врагами и союзниками" },
        { value: "willpower_and_endurance", text: "Сила воли и выносливость" },
        {
          value: "creativity_and_invention",
          text: "Креативность и изобретательность",
        },
      ],
    };
  },
  watch: {
    formData: {
      handler(newVal) {
        console.log("Получено через v-model в HeroForm:", newVal); // Вывод данных в консоль
        this.localFormData = { ...newVal };
        console.log("this.localFormData", this.localFormData); // Вывод данных в консоль
      },
      deep: true,
    },
  },
  methods: {
    syncForm() {
      console.log(this.localFormData);
      this.$emit("sync", this.localFormData);
    },
  },
};
</script>

<style>
/* Ваши стили CSS здесь */

.hero-form {
  margin: 20px auto; /* Центрирование формы по горизонтали */
  padding: 20px;
  border: 1px solid #ccc; /* Легкая рамка */
  border-radius: 8px; /* Закругленные углы */
  background-color: #f9f9f9; /* Светлый фон */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Тень вокруг формы */
}

.hero-form h2 {
  text-align: center; /* Заголовок по центру */
  color: #333;
  margin-bottom: 20px; /* Отступ снизу */
}

.hero-form label {
  /* display: block; Каждый тег label занимает всю ширину */
  margin: 10px 0 5px; /* Отступы для лучшего восприятия */
  padding: 5px;
  color: #555;
}

.hero-form input[type="text"],
.hero-form select,
.hero-form textarea {
  width: 100%; /* Полная ширина */
  padding: 10px; /* Внутренние отступы */
  border: 1px solid #ccc; /* Рамка */
  border-radius: 4px; /* Закругление углов */
  box-sizing: border-box; /* Учет внутренних отступов в ширине */
  margin-bottom: 15px; /* Отступы между полями */
  font-size: 16px; /* Размер шрифта */
}

.hero-form button {
  background-color: #007bff; /* Синий цвет кнопок */
  color: white; /* Цвет текста */
  border: none; /* Без рамки */
  border-radius: 4px; /* Закругленные углы */
  padding: 10px 15px; /* Внутренние отступы */
  font-size: 16px; /* Размер шрифта */
  cursor: pointer; /* Стрелка курсора при наведении */
  transition: background-color 0.3s; /* Плавный переход цвета */
}

.hero-form button:disabled {
  background-color: #ccc; /* Серый цвет для заблокированных кнопок */
  cursor: not-allowed; /* Курсор недоступен при блокировке */
}

.hero-form button:hover:not(:disabled) {
  background-color: #0056b3; /* Темный синий при наведении */
}
</style>
