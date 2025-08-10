<template>
	<div class="mx-auto my-2 flex w-full items-center justify-center">
		<header class="rounded-full">
				<nav class="z-10 flex h-[50px] justify-around gap-2 p-1 transition-all duration-300 ease-in-out sm:h-[45px] sm:hover:gap-4">
					<NuxtLink
						v-for="item in navigation"
						:id="item.name.toLowerCase()"
						:key="item.name"
						:aria-label="item.name + ' navigation link'"
						class="flex items-center rounded-full border border-transparent px-4 py-1 transition-all duration-300 ease-in-out hover:border-white/5 hover:bg-zinc-900/50 hover:backdrop-blur-3xl sm:px-6"
					>
						<UIcon
							:name="item.icon"
							class="size-7 font-light sm:size-6"
						/>
					</NuxtLink>
				</nav>
		</header>
	</div>
</template>

<script setup lang="ts">
const route = useRoute()
const navigation = {
	home: {
		name: 'Home',
		to: '/',
		icon: 'lucide:home',
	},
	works: {
		name: 'Works',
		to: '/works',
		icon: 'lucide:briefcase',
	},
	writing: {
		name: 'Writing',
		to: '/writing',
		icon: 'lucide:library',
	},
	about: {
		name: 'About',
		to: '/about',
		icon: 'lucide:user',
	},
	contact: {
		name: 'Contact',
		to: '/contact',
		icon: 'lucide:mail',
	},
}
</script>