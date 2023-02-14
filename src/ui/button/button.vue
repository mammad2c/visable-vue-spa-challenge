<template>
  <component
    :is="component"
    v-ripple
    :class="buttonClass"
    :aria-label="defaultAriaLabel"
    v-bind="elementAttrs"
  >
    <slot>
      <span v-if="loading && !icon" :class="iconStyleClass"></span>
      <span v-if="icon" :class="iconStyleClass"></span>
      <span class="p-button-label">{{ label || "&nbsp;" }}</span>
      <span v-if="badge" :class="badgeStyleClass">{{ badge }}</span>
    </slot>
  </component>
</template>

<script lang="ts" setup>
import vRipple from "primevue/ripple";
import { computed, useAttrs } from "vue";
import { UseLinkOptions } from "vue-router";

interface ButtonProps extends UseLinkOptions {
  badge?: string;
  badgeClass?: string;
  href?: string;
  icon?: string;
  iconClass?: string;
  iconPos?: string;
  label?: string;
  loading?: boolean;
  loadingIcon?: string;
  type?: "button" | "submit" | "reset";
}

const attrs = useAttrs();

const props = withDefaults(defineProps<ButtonProps>(), {
  badge: undefined,
  badgeClass: undefined,
  href: undefined,
  icon: undefined,
  iconClass: undefined,
  iconPos: "left",
  label: undefined,
  loading: false,
  loadingIcon: "pi pi-spinner pi-spin",
  to: undefined,
  type: "button",
});

const to = computed(() => props.to || attrs.to || "");

const component = computed(() => {
  if (props.href) {
    return "a";
  }

  if (to.value) {
    return "router-link";
  }

  return "button";
});

const isButton = computed(() => component.value === "button");

const buttonClass = computed(() => {
  return {
    "p-button p-component": true,
    "p-button-icon-only": props.icon && !props.label,
    "p-button-loading": props.loading,
    "p-button-loading-label-only": props.loading && !props.icon && props.label,
    "p-button-vertical":
      (props.iconPos === "top" || props.iconPos === "bottom") && props.label,
    "p-disabled": attrs.disabled || props.loading,
  };
});

const iconStyleClass = computed(() => {
  return [
    props.loading ? "p-button-loading-icon " + props.loadingIcon : props.icon,
    "p-button-icon",
    props.iconClass,
    {
      "p-button-icon-bottom": props.iconPos === "bottom" && props.label,
      "p-button-icon-left": props.iconPos === "left" && props.label,
      "p-button-icon-right": props.iconPos === "right" && props.label,
      "p-button-icon-top": props.iconPos === "top" && props.label,
    },
  ];
});

const badgeStyleClass = computed(() => {
  return [
    "p-badge p-component",
    props.badgeClass,
    {
      "p-badge-no-gutter": props.badge && String(props.badge).length === 1,
    },
  ];
});

const disabled = computed(() => {
  return (attrs.disabled as boolean) || props.loading;
});

const defaultAriaLabel = computed((): string => {
  return props.label
    ? props.label + (props.badge ? " " + props.badge : "")
    : (attrs["aria-label"] as string);
});

const elementAttrs = computed(() => {
  return {
    ...(isButton.value && { type: props.type }),
    ...(isButton.value && disabled.value && { disabled: disabled.value }),
    ...(props.href && { href: props.href }),
    ...(props.to && { to: props.to }),
  };
});
</script>
