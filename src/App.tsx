import { Accessor, Component, Setter } from "solid-js";
import { Routes, Route } from "@solidjs/router/dist/components";
import "@carbon/charts/styles.css";
import logo from "./assets/logo.svg";
import styles from "./App.module.css";
import Mine, { state, setState, color, setColor } from "./mine";
import {
  DonutChartExample,
  GaugeChartExample,
  PieChartExample,
  LineChartExample,
  LollipopChartExample,
  RadarChartExample,
  ScatterChartExample,
  SparklineChartExample,
  StepChartExample,
  MeterChartExample,
  AlluvialChartExample,
  TreeChartExample,
  TreemapChartExample,
  CirclePackChartExample,
} from "../examples";
import HistogramChartExample from "../examples/HistogramChartExample";
import CarbonCharts from "@carbon/charts";

type colorState = { color: Accessor<string>; setColor: Setter<string> };

const TooMuchBreaklines: Component = () => (
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
);

const App: Component = () => {
  return (
    <div class={styles.App}>
      <div>
        <DonutChartExample />
        <br />
        <br />
        <PieChartExample />
        <br />
        <br />
        <GaugeChartExample />
        <br />
        <br />
        <HistogramChartExample />
        <br />
        <br />
        <LineChartExample />
        <br />
        <br />
        <LollipopChartExample />
        <br />
        <br />
        <RadarChartExample />
        <br />
        <br />
        <ScatterChartExample />
        <br />
        <br />
        <SparklineChartExample />
        <br />
        <br />
        <StepChartExample />
        <TooMuchBreaklines />
        {/* <MeterChartExample /> */}
        <AlluvialChartExample />
        <br />
        <br />
        <br />
        <TreeChartExample />
        <br />
        <br />
        <br />
        <TreemapChartExample />
        <br />
        <br />
        <br />
        <CirclePackChartExample />
      </div>
      <TooMuchBreaklines />
      <TooMuchBreaklines />
      <TooMuchBreaklines />
      <TooMuchBreaklines />
      <TooMuchBreaklines />
      <TooMuchBreaklines />
      <TooMuchBreaklines />
      <TooMuchBreaklines />
      <div>
        <Mine />
        <br />
        <button
          style={{ "background-color": state.style.color /* color() */ }}
          onClick={() => {
            setState("style", { color: "blue" });
            //setColor("yellow");
          }}
        >
          Change Theme
        </button>
        <br />
        <h2 style={{ color: color() }}>`Just showing Color Change`</h2>
        <br />
        <header class={styles.header}>
          <img src={logo} class={styles.logo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            class={styles.link}
            href="https://github.com/solidjs/solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Solid
          </a>
        </header>
      </div>
    </div>
  );
};

export default App;

/**
 * If you're reading all this code from GitHub, sorry about bothering you with the breakline handling if you are/were bothered.
 * The stepped component was bumping into the <header>. Sorry about that. You can do whatever you want after cloning this tho.
 * But don't join as a contributor unless you ask.
 **/
