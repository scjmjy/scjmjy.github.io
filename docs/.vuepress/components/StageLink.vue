<template>
  <!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
  <RouterLink
    v-if="isInternal"
    class="nav-link"
    :class="{ active }"
    :to="link"
    @focusout.native="focusoutAction"
  >
    <i
      v-if="item.icon"
      :class="`iconfont ${$themeConfig.iconPrefix}${item.icon}`"
    />
    {{ item.text }}
  </RouterLink>
  <a
    v-else
    class="nav-link external"
    :href="link"
    :target="target"
    :rel="rel"
    @focusout="focusoutAction"
  >
    <i
      v-if="item.icon"
      :class="`iconfont ${$themeConfig.iconPrefix}${item.icon}`"
    />
    {{ item.text }}
    <OutboundLink v-if="isBlankTarget" />
  </a>
</template>

<script>
import Vue from "vue";
import { ensureExt, isExternal, isMailto, isTel } from "vuepress-theme-hope/utils/path";
export default Vue.extend({
    name: "NavLink",
    props: {
        item: { type: Object, required: true },
    },
    computed: {
        link() {
            return ensureExt(this.item.link);
        },
        active() {
            // link is home path
            if ((this.$site.locales &&
                Object.keys(this.$site.locales).some((rootLink) => rootLink === this.link)) ||
                this.link === "/")
                // exact match
                return this.$route.path === this.link;
            // inclusive match
            return this.$route.path.startsWith(this.link);
        },
        isNonHttpURI() {
            return isMailto(this.link) || isTel(this.link);
        },
        isBlankTarget() {
            return this.target === "_blank";
        },
        isInternal() {
            return !isExternal(this.link) && !this.isBlankTarget;
        },
        target() {
            if (this.isNonHttpURI)
                return null;
            if (this.item.target)
                return this.item.target;
            return isExternal(this.link) ? "_blank" : "";
        },
        rel() {
            if (this.isNonHttpURI)
                return null;
            if (this.item.rel === false)
                return null;
            if (this.item.rel)
                return this.item.rel;
            return this.isBlankTarget ? "noopener noreferrer" : null;
        },
    },
    methods: {
        focusoutAction() {
            // eslint-disable-next-line vue/require-explicit-emits
            this.$emit("focusout");
        },
    },
});
</script>

<style lang="stylus">
.nav-link
  line-height 1.4rem

  .navbar &
    color var(--dark-grey)

    &.active
      color var(--accent-color)

  .sidebar &
    color var(--text-color)

    &:hover, &.active
      color var(--accent-color)
</style>
