import { type CollectionEntry, getEntries } from "astro:content";

export async function getTagsByEntry(articleEntry: CollectionEntry<"articles" | "resources">){
  const tagEntries = await getEntries(articleEntry.data.tags);
  const tags = tagEntries.map(te => te.data);
  
  return tags;
}

export async function getTagsByEntries(entries: CollectionEntry<"articles" | "resources">[]){
  const entriesTags = new Map<string, { id: string; name: string; description: string; }[]>();
  for (const entry of entries) {
    const tagEntries = await getEntries(entry.data.tags);
    const tags = tagEntries.map(te => te.data);
    entriesTags.set(entry.id, tags);
  }

  return entriesTags;
}

export async function getTagNamesByEntry(entry: CollectionEntry<"articles" | "resources">){
  const tagEntries = await getEntries(entry.data.tags);
  const tags = tagEntries.map(te => te.data.name);
  
  return tags;
}

export async function getTagNamesByEntries(entries: CollectionEntry<"articles" | "resources">[]){
  const entriesTagNames = new Map<string, string[]>();
  for (const entry of entries) {
    const tagEntries = await getEntries(entry.data.tags);
    const tags = tagEntries.map(te => te.data.name);
    entriesTagNames.set(entry.id, tags);
  }

  return entriesTagNames;
}