const references = { "first-clip": "centi", parameters: "defineparams", composition: "cue" };

export const foundationMaterials = Object.fromEntries(Object.entries(references).map(([id, reference]) => [id, {
  startProject: `/online-editor/?example=tutorial-${id}-start`,
  completedProject: `/online-editor/?example=tutorial-${id}-complete`,
  startDownload: `/projects/tutorials/${id}/start.json`,
  download: `/projects/tutorials/${id}/complete.json`,
  referenceUrl: `/reference/#${reference}`, referenceLabel: "API Reference"
}]));

export const foundationProjects = Object.keys(references).flatMap(id => ["start", "complete"].map(stage => ({
  id: `tutorial-${id}-${stage}`,
  projectUrl: new URL(`../projects/tutorials/${id}/${stage}.json`, import.meta.url).href
})));
