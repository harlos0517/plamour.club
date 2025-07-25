<script lang="ts">
import { fetchData, type Member } from "$lib";

let archieves: {
  title: string,
  id: string,
  publishedAt: string,
  scheduledAt: string,
  startAt: string,
  endAt: string,
  duration: number,
  host: string,
  isStream: boolean,
  type: string,
  subType: string,
  otherMembers: string[],
  customTags: string[],
}[] = []

let members: Member[] = []

const load = async() => {
  archieves = await fetchData('ARCHIEVE')
  members = await fetchData('MEMBER')
}

const onload = (e: Element) => { load() }

const displayDateTime = (datetime: string) => {
  const d = new Date(datetime)
  return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

const secondsToDuration = (seconds: number) => {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  return h
    ?`${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
    :`${m}:${String(s).padStart(2, '0')}`
}
</script>

<div use:onload class="min-h-48 flex flex-row justify-start flex-wrap -mx-4">
  {#each archieves as { title, id, publishedAt, scheduledAt, startAt, endAt, duration, host, isStream, type, subType, otherMembers, customTags }}
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <a href={`https://youtu.be/${id}`} target="_blank" class="block relative w-full h-full overflow-hidden rounded-md">
        <img class="w-full h-auto" src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt={title}>
        <div class="p-2 bg-black/60 text-white">
          <div class="flex flex-row items-center text-xs font-mono">
            <div class="mr-2 flex-grow-0">
              <div class="avatar-group -space-x-4 hover:space-x-1">
                {#each [host, ...(otherMembers || [])] as name, i}
                  <img
                    class="avatar w-8 h-8 transition-all border-2 relative"
                    src={members.find(m => m.id === name)?.profilePic}
                    style:z-index={100 - i}
                    alt={name}
                  >
                {/each}
              </div>
            </div>
            <div class="flex-1">{startAt ? displayDateTime(startAt) : displayDateTime(publishedAt)}</div>
            <div class="flex-grow-0">{secondsToDuration(duration)}</div>
          </div>
          <div>{title}</div>
          <div>
            {#each [type, subType, ...(customTags || [])].filter(t => t) as tag}
              <span class="badge mr-2">{tag}</span>
            {/each}
          </div>
        </div>
      </a>
    </div>
  {/each}
</div>