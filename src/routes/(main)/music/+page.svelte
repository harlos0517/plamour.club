<script lang="ts">
import { fetchData, type Member } from "$lib";

let musics: {
  name: string,
  members: string[],
  type: 'original' | 'cover',
  composer: string,
  publishedAt: string,
  url: string,
  imageUrl: string,
}[] = []

let allMembers: Member[] = []

const load = async() => {
  musics = await fetchData('MUSIC')
  allMembers = await fetchData('MEMBER')
}

const onload = (e: Element) => { load() }

const displayDate = (date: string) => {
  const d = new Date(date)
  return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`
}
</script>

<div use:onload class="min-h-48 flex flex-row justify-start flex-wrap -mx-4">
  {#each musics as { name, members, type, composer, publishedAt, url, imageUrl }}
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <a href={url} target="_blank" class="block relative w-full h-full overflow-hidden rounded-md">
        <img class="w-full h-auto" src={imageUrl} alt={name}>
        <div class="p-2 bg-black/60 text-white">
          <div class="flex flex-row items-center text-xs font-mono">
            <div class="avatar-group -space-x-4 hover:space-x-1 mr-2">
              {#each members || [] as name, i}
                <img
                  class="avatar w-8 h-8 transition-all border-2 relative"
                  src={allMembers.find(m => m.id === name)?.profilePic}
                  style:z-index={100 - i}
                  alt={name}
                >
              {/each}
            </div>
            <div class="flex-1">{publishedAt && displayDate(publishedAt)}</div>
            <div class="flex-grow-0">{type === 'original' ? '原創' : '翻唱'}</div>
          </div>
          <div>{name} - {composer}</div>
        </div>
      </a>
    </div>
  {/each}
</div>