<script setup lang="ts">
import { ref } from 'vue'
const rows = 10
const cols = 50
const grid = ref(
  Array.from({ length: cols }, () =>
    Array.from({ length: rows }, () => ({
      isStart: false,
      isEnd: false,
      isWall: false,
      isVisited: false,
      distance: Infinity,
    })),
  ),
)
</script>

<template>
  <main>
    <div
      class="grid m-auto my-40 max-h-fit max-w-fit"
      :style="{
        display: 'grid',
        gridTemplateRows: `repeat(${rows}, 30px)`,
        gridTemplateColumns: `repeat(${cols}, 30px)`,
      }"
    >
      <div v-for="(row, rowIndex) in grid" :key="`row-${rowIndex}`">
        <div
          v-for="(cell, colIndex) in row"
          :key="`cell-${rowIndex}-${colIndex}`"
          :style="{
            width: '30px',
            height: '30px',
            border: '1px solid #5b9',
            boxSizing: 'border-box',
            backgroundColor: cell.isWall
              ? '#000'
              : cell.isStart
                ? 'green'
                : cell.isEnd
                  ? 'red'
                  : cell.isVisited
                    ? '#87ceeb'
                    : '#111',
          }"
        ></div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
