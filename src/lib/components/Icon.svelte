<script type="ts">
  export let icon = null;
  export let size = 'small'; // small, medium
  export let iconClass = '';
  export let color = '';

  $: _iconClass = setIconClass(size, color, iconClass);

  function setIconClass(s, c, ic) {
    return `${size === 'small' ? 'h-[18px] w-[18px]' : 'h-[24px] w-[24px]'} ${color ? color : 'fill-buttonblue-800'} ${iconClass}`;
  }

</script>

<div class="hidden">{size === 'small' ? 'h-[18px] w-[18px]' : 'h-[24px] w-[24px]'} {color} {color ? color : 'fill-buttonblue-800'} {iconClass}</div>

{#if icon === 'add'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
{/if}
{#if icon === 'undo'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></svg>
{/if}
{#if icon === 'redo'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></svg>
{/if}
{#if icon === 'save'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>
{/if}
{#if icon === 'arrow_drop_down'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z"/></svg>
{/if}
{#if icon === 'arrow_right'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M10 17l5-5-5-5v10z"/><path d="M0 24V0h24v24H0z" fill="none"/></svg>
{/if}
{#if icon === 'format_bold'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/></svg>
{/if}
{#if icon === 'format_italic'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/></svg>
{/if}
{#if icon === 'more_horiz'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
{/if}
{#if icon === 'more_vert'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
{/if}
{#if icon === 'format_size'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"/></svg>
{/if}
{#if icon === 'code'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
{/if}
{#if icon === 'format_quote'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>
{/if}
{#if icon === 'link'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
{/if}
{#if icon === 'link_off'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27z"/><path d="M0 24V0" fill="none"/></svg>
{/if}
{#if icon === 'keyboard_command_key'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M17.5,3C15.57,3,14,4.57,14,6.5V8h-4V6.5C10,4.57,8.43,3,6.5,3S3,4.57,3,6.5S4.57,10,6.5,10H8v4H6.5 C4.57,14,3,15.57,3,17.5S4.57,21,6.5,21s3.5-1.57,3.5-3.5V16h4v1.5c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5S19.43,14,17.5,14H16 v-4h1.5c1.93,0,3.5-1.57,3.5-3.5S19.43,3,17.5,3L17.5,3z M16,8V6.5C16,5.67,16.67,5,17.5,5S19,5.67,19,6.5S18.33,8,17.5,8H16L16,8 z M6.5,8C5.67,8,5,7.33,5,6.5S5.67,5,6.5,5S8,5.67,8,6.5V8H6.5L6.5,8z M10,14v-4h4v4H10L10,14z M17.5,19c-0.83,0-1.5-0.67-1.5-1.5 V16h1.5c0.83,0,1.5,0.67,1.5,1.5S18.33,19,17.5,19L17.5,19z M6.5,19C5.67,19,5,18.33,5,17.5S5.67,16,6.5,16H8v1.5 C8,18.33,7.33,19,6.5,19L6.5,19z"/></g></g></svg>
{/if}
{#if icon === 'border_all'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 3v18h18V3H3zm8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z"/></svg>
{/if}
{#if icon === 'post_add'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M17,19.22H5V7h7V5H5C3.9,5,3,5.9,3,7v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-7h-2V19.22z"/><path d="M19,2h-2v3h-3c0.01,0.01,0,2,0,2h3v2.99c0.01,0.01,2,0,2,0V7h3V5h-3V2z"/><rect height="2" width="8" x="7" y="9"/><polygon points="7,12 7,14 15,14 15,12 12,12"/><rect height="2" width="8" x="7" y="15"/></g></g></svg>
{/if}
{#if icon === 'alternate_email'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
{/if}
{#if icon === 'text_format'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"/></svg>
{/if}
{#if icon === 'search'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
{/if}
{#if icon === 'spellcheck'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"/></svg>
{/if}
{#if icon === 'fullscreen'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
{/if}
{#if icon === 'edit'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
{/if}
{#if icon === 'text_fields'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M2.5,4v3h5v12h3V7h5V4H2.5z M21.5,9h-9v3h3v7h3v-7h3V9z"/></g></g></g></svg>
{/if}
{#if icon === 'description'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
{/if}
{#if icon === 'history'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>
{/if}
{#if icon === 'format_underlined'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"/></svg>
{/if}
{#if icon === 'strikethrough_s'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M6.85,7.08C6.85,4.37,9.45,3,12.24,3c1.64,0,3,0.49,3.9,1.28c0.77,0.65,1.46,1.73,1.46,3.24h-3.01 c0-0.31-0.05-0.59-0.15-0.85c-0.29-0.86-1.2-1.28-2.25-1.28c-1.86,0-2.34,1.02-2.34,1.7c0,0.48,0.25,0.88,0.74,1.21 C10.97,8.55,11.36,8.78,12,9H7.39C7.18,8.66,6.85,8.11,6.85,7.08z M21,12v-2H3v2h9.62c1.15,0.45,1.96,0.75,1.96,1.97 c0,1-0.81,1.67-2.28,1.67c-1.54,0-2.93-0.54-2.93-2.51H6.4c0,0.55,0.08,1.13,0.24,1.58c0.81,2.29,3.29,3.3,5.67,3.3 c2.27,0,5.3-0.89,5.3-4.05c0-0.3-0.01-1.16-0.48-1.94H21V12z"/></g></g></g></svg>
{/if}
{#if icon === 'subscript'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/><path d="M22,18h-2v1h3v1h-4v-2c0-0.55,0.45-1,1-1h2v-1h-3v-1h3c0.55,0,1,0.45,1,1v1C23,17.55,22.55,18,22,18z M5.88,18h2.66 l3.4-5.42h0.12l3.4,5.42h2.66l-4.65-7.27L17.81,4h-2.68l-3.07,4.99h-0.12L8.85,4H6.19l4.32,6.73L5.88,18z"/></g></svg>
{/if}
{#if icon === 'superscript'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" x="0" y="0"/><path d="M22,7h-2v1h3v1h-4V7c0-0.55,0.45-1,1-1h2V5h-3V4h3c0.55,0,1,0.45,1,1v1C23,6.55,22.55,7,22,7z M5.88,20h2.66l3.4-5.42h0.12 l3.4,5.42h2.66l-4.65-7.27L17.81,6h-2.68l-3.07,4.99h-0.12L8.85,6H6.19l4.32,6.73L5.88,20z"/></g></svg>
{/if}
{#if icon === 'done'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
{/if}
{#if icon === 'rate_review'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0zm15.35 6.41l-1.77-1.77c-.2-.2-.51-.2-.71 0L6 11.53V14h2.47l6.88-6.88c.2-.19.2-.51 0-.71z" fill="none"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z"/></svg>
{/if}
{#if icon === 'visibility'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
{/if}
{#if icon === 'close'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
{/if}
{#if icon === 'navigate_next'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
{/if}
{#if icon === 'navigate_before'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
{/if}
{#if icon === 'keyboard_arrow_up'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>
{/if}
{#if icon === 'keyboard_arrow_down'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
{/if}
{#if icon === 'custom_suggestions'}
<svg class={_iconClass} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M 18 2.016 L 18 0 L 0 0 L 0 2.016 Z M 18 6.984 L 18 5.016 L 0 5.016 L 0 6.984 Z M 7.5 12 L 7.5 9.984 L 0 9.984 L 0 12 Z M 16.871 11.691 L 17.633 10.93 C 17.711 10.852 17.75 10.754 17.75 10.637 C 17.75 10.52 17.711 10.422 17.633 10.344 L 17.633 10.344 L 16.656 9.367 C 16.578 9.289 16.48 9.25 16.363 9.25 C 16.246 9.25 16.148 9.289 16.07 9.367 L 16.07 9.367 L 15.309 10.129 Z M 11.813 16.75 L 16.422 12.141 L 14.859 10.578 L 10.25 15.188 L 10.25 16.75 Z" fill="var(--token-88825ffe-5fdb-4cfe-8ef7-2707e8d4dd6d, rgba(27, 43, 75, 0.88))" name="n"></path></svg>
{/if}
{#if icon === 'custom_accept_all'}
<svg class={_iconClass} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M 18 2.016 L 18 0 L 0 0 L 0 2.016 Z M 18 6.984 L 18 5.016 L 0 5.016 L 0 6.984 Z M 7.5 12 L 7.5 9.984 L 0 9.984 L 0 12 Z M 12.563 17.078 L 18.188 11.406 L 16.781 10 L 12.563 14.219 L 10.406 12.109 L 9 13.516 Z" fill="var(--token-88825ffe-5fdb-4cfe-8ef7-2707e8d4dd6d, rgba(27, 43, 75, 0.88))" name="n"></path></svg>
{/if}
{#if icon === 'custom_reject_all'}
<svg class={_iconClass} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M 18 2.016 L 18 0 L 0 0 L 0 2.016 Z M 18 6.984 L 18 5.016 L 0 5.016 L 0 6.984 Z M 7.5 12 L 7.5 9.984 L 0 9.984 L 0 12 Z M 16.609 17.516 L 18.016 16.109 L 15.438 13.484 L 18.016 10.906 L 16.609 9.5 L 14.031 12.078 L 11.406 9.5 L 10 10.906 L 12.625 13.484 L 10 16.109 L 11.406 17.516 L 14.031 14.891 Z" fill="var(--token-88825ffe-5fdb-4cfe-8ef7-2707e8d4dd6d, rgba(27, 43, 75, 0.88))" name="n"></path></svg>
{/if}
{#if icon === 'custom_accept_reject'}
<svg class={_iconClass} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M 14.531 7.078 L 20.156 1.406 L 18.75 0 L 14.531 4.219 L 12.375 2.109 L 10.969 3.516 Z M 9 5.063 L 9 3.047 L 0 3.047 L 0 5.063 Z M 17.578 16.078 L 18.984 14.672 L 16.406 12.047 L 18.984 9.469 L 17.578 8.063 L 15 10.641 L 12.375 8.063 L 10.969 9.469 L 13.594 12.047 L 10.969 14.672 L 12.375 16.078 L 15 13.453 Z M 9 13.078 L 9 11.063 L 0 11.063 L 0 13.078 Z" transform="translate(0.016 0.938)" fill="var(--token-88825ffe-5fdb-4cfe-8ef7-2707e8d4dd6d, rgba(27, 43, 75, 0.88))" name="r"></path></svg>
{/if}
{#if icon === 'keyboard'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"/><path d="M0 0h24v24H0zm0 0h24v24H0z" fill="none"/></svg>
{/if}
{#if icon === 'help_outline'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>
{/if}
{#if icon === 'drag_indicator'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
{/if}
{#if icon === 'delete_outline'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
{/if}
{#if icon === 'chat_bubble_outline'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
{/if}
{#if icon === 'content_copy'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
{/if}
{#if icon === 'custom_comment_add'}
<svg class={_iconClass} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M 0 1.969 C 0 1.437 0.195 0.977 0.586 0.586 C 0.977 0.195 1.438 0 1.969 0 L 18 0 C 18.531 0 18.992 0.195 19.383 0.586 C 19.773 0.977 19.969 1.437 19.969 1.969 L 19.969 13.969 C 19.969 14.5 19.773 14.969 19.383 15.375 C 18.992 15.781 18.531 15.984 18 15.984 L 13.016 15.984 L 9.984 19.969 L 7.008 15.984 C 7.008 15.984 2.537 15.984 1.969 15.984 C 1.401 15.984 0.906 15.769 0.586 15.375 C 0.266 14.981 0 14.484 0 13.969 C -0 12.443 0 1.969 0 1.969 Z M 15.984 3.984 L 3.984 3.984 L 3.984 6 L 15.984 6 Z M 15.984 6.984 L 3.984 6.984 L 3.984 9 L 15.984 9 Z M 15.984 9.984 L 3.984 9.984 L 3.984 12 L 15.984 12 Z" transform="translate(1 0)" name="r"></path></svg>
{/if}
{#if icon === 'cached'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/></svg>
{/if}
{#if icon === 'delete'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
{/if}
{#if icon === 'custom_placement_left'}
<svg class={_iconClass} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="A4" transform="translate(-380.000000, -415.000000)"><g id="Group-3" transform="translate(380.000000, 415.000000)"><rect id="Rectangle" x="0" y="0" width="24" height="24"></rect><rect id="Rectangle" fill="#505E76" x="6" y="4" width="12" height="2"></rect><rect id="Rectangle-Copy" fill="#505E76" x="6" y="18" width="12" height="2"></rect><rect id="Rectangle-Copy-2" fill="#505E76" x="6" y="9" width="8" height="6" rx="2"></rect></g></g></g></svg>
{/if}
{#if icon === 'custom_placement_center'}
<svg class={_iconClass} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="A4" transform="translate(-411.000000, -415.000000)"><g id="Group-3-Copy" transform="translate(411.000000, 415.000000)"><rect id="Rectangle" x="0" y="0" width="24" height="24"></rect><rect id="Rectangle" fill="#505E76" x="6" y="4" width="12" height="2"></rect><rect id="Rectangle-Copy" fill="#505E76" x="6" y="18" width="12" height="2"></rect><rect id="Rectangle-Copy-2" fill="#505E76" x="8" y="9" width="8" height="6" rx="2"></rect></g></g></g></svg>
{/if}
{#if icon === 'custom_placement_right'}
<svg class={_iconClass} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="A4" transform="translate(-439.000000, -415.000000)"><g id="Group-3-Copy-2" transform="translate(439.000000, 415.000000)"><rect id="Rectangle" x="0" y="0" width="24" height="24"></rect><rect id="Rectangle" fill="#505E76" x="6" y="4" width="12" height="2"></rect><rect id="Rectangle-Copy" fill="#505E76" x="6" y="18" width="12" height="2"></rect><rect id="Rectangle-Copy-2" fill="#505E76" x="10" y="9" width="8" height="6" rx="2"></rect></g></g></g></svg>
{/if}
{#if icon === 'custom_orientation_portrait'}
<svg class={_iconClass} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="A4" transform="translate(-380.000000, -449.000000)"><g id="Group-3-Copy-3" transform="translate(380.000000, 449.000000)"><rect id="Rectangle" x="0" y="0" width="24" height="24"></rect><rect id="Rectangle-Copy-2" fill="#505E76" x="6" y="3" width="12" height="18" rx="2"></rect></g></g></g></svg>
{/if}
{#if icon === 'custom_orientation_landscape'}
<svg class={_iconClass} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="A4" transform="translate(-411.000000, -449.000000)"><g id="Group-3-Copy-4" transform="translate(411.000000, 449.000000)"><rect id="Rectangle" x="0" y="0" width="24" height="24"></rect><rect id="Rectangle-Copy-2" fill="#505E76" x="3" y="6" width="18" height="12" rx="2"></rect></g></g></g></svg>
{/if}
{#if icon === 'custom_placement_top'}
<svg class={_iconClass} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="A4" transform="translate(-439.000000, -486.000000)"><g id="Group-3-Copy-2" transform="translate(439.000000, 486.000000)"><rect id="Rectangle" x="0" y="0" width="24" height="24"></rect><rect id="Rectangle" fill="#505E76" x="6" y="13" width="12" height="2"></rect><rect id="Rectangle-Copy" fill="#505E76" x="6" y="18" width="12" height="2"></rect><rect id="Rectangle-Copy-2" fill="#505E76" x="6" y="4" width="12" height="6" rx="2"></rect></g></g></g></svg>
{/if}
{#if icon === 'custom_placement_middle'}
<svg class={_iconClass} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="A4" transform="translate(-380.000000, -486.000000)"><g id="Group-3" transform="translate(380.000000, 486.000000)"><rect id="Rectangle" x="0" y="0" width="24" height="24"></rect><rect id="Rectangle" fill="#505E76" x="6" y="4" width="12" height="2"></rect><rect id="Rectangle-Copy" fill="#505E76" x="6" y="18" width="12" height="2"></rect><rect id="Rectangle-Copy-2" fill="#505E76" x="6" y="9" width="12" height="6" rx="2"></rect></g></g></g></svg>
{/if}
{#if icon === 'custom_placement_bottom'}
<svg class={_iconClass} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="A4" transform="translate(-411.000000, -486.000000)"><g id="Group-3-Copy" transform="translate(411.000000, 486.000000)"><rect id="Rectangle" x="0" y="0" width="24" height="24"></rect><rect id="Rectangle" fill="#505E76" x="6" y="4" width="12" height="2"></rect><rect id="Rectangle-Copy" fill="#505E76" x="6" y="9" width="12" height="2"></rect><rect id="Rectangle-Copy-2" fill="#505E76" x="6" y="14" width="12" height="6" rx="2"></rect></g></g></g></svg>
{/if}
{#if icon === 'remove'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13H5v-2h14v2z"/></svg>
{/if}
{#if icon === 'custom_width_minimal'}
<svg class={_iconClass} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="A4" transform="translate(-411.000000, -415.000000)"><g id="Group-3-Copy" transform="translate(411.000000, 415.000000)"><rect id="Rectangle" x="0" y="0" width="24" height="24"></rect><rect id="Rectangle" fill="#505E76" x="6" y="4" width="12" height="2"></rect><rect id="Rectangle-Copy" fill="#505E76" x="6" y="18" width="12" height="2"></rect><rect id="Rectangle-Copy-2" fill="#505E76" x="8" y="9" width="8" height="6" rx="2"></rect></g></g></g></svg>
{/if}
{#if icon === 'custom_width_normal'}
<svg class={_iconClass} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="A4" transform="translate(-411.000000, -521.000000)"><g id="Group-3-Copy" transform="translate(411.000000, 521.000000)"><rect id="Rectangle" x="0" y="0" width="24" height="24"></rect><rect id="Rectangle" fill="#505E76" x="6" y="4" width="12" height="2"></rect><rect id="Rectangle-Copy" fill="#505E76" x="6" y="18" width="12" height="2"></rect><rect id="Rectangle-Copy-2" fill="#505E76" x="6" y="9" width="12" height="6" rx="2"></rect></g></g></g></svg>
{/if}
{#if icon === 'custom_width_full'}
<svg class={_iconClass} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="A4" transform="translate(-439.000000, -521.000000)"><g id="Group-3-Copy" transform="translate(439.000000, 521.000000)"><rect id="Rectangle" x="0" y="0" width="24" height="24"></rect><rect id="Rectangle" fill="#505E76" x="6" y="4" width="12" height="2"></rect><rect id="Rectangle-Copy" fill="#505E76" x="6" y="18" width="12" height="2"></rect><rect id="Rectangle-Copy-2" fill="#505E76" x="4" y="9" width="16" height="6" rx="2"></rect></g></g></g></svg>
{/if}
{#if icon === 'keyboard_double_arrow_up'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="6,17.59 7.41,19 12,14.42 16.59,19 18,17.59 12,11.59"/><polygon points="6,11 7.41,12.41 12,7.83 16.59,12.41 18,11 12,5"/></g></g></svg>
{/if}
{#if icon === 'keyboard_double_arrow_down'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="18,6.41 16.59,5 12,9.58 7.41,5 6,6.41 12,12.41"/><polygon points="18,13 16.59,11.59 12,16.17 7.41,11.59 6,13 12,19"/></g></g></svg>
{/if}
{#if icon === 'north_east'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z"/></svg>
{/if}
{#if icon === 'custom_inline_start'}
<svg class={_iconClass} width="6px" height="24px" viewBox="0 0 6 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="A4" transform="translate(-506.000000, -415.000000)"><g id="Group-3-Copy-5" transform="translate(506.000000, 415.000000)"><rect id="Rectangle-Copy-3" x="0" y="0" width="2" height="24"></rect><rect id="Rectangle" fill="#505E76" x="0" y="0" width="6" height="2"></rect><rect id="Rectangle-Copy" fill="#505E76" x="0" y="2" width="2" height="10"></rect></g></g></g></svg>
{/if}
{#if icon === 'custom_inline_end'}
<svg class={_iconClass} width="6px" height="24px" viewBox="0 0 6 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="A4" transform="translate(-518.000000, -415.000000)"><g id="Group-3-Copy-6" transform="translate(518.000000, 415.000000)"><rect id="Rectangle-Copy-3" x="0" y="0" width="2" height="24"></rect><rect id="Rectangle" fill="#505E76" x="0" y="20" width="6" height="2"></rect><rect id="Rectangle-Copy" fill="#505E76" x="4" y="10" width="2" height="10"></rect></g></g></g></svg>
{/if}
{#if icon === 'image'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
{/if}
{#if icon === 'horizontal_rule'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" fill-rule="evenodd" height="24" width="24"/><rect fill-rule="evenodd" height="2" width="16" x="4" y="11"/></g></svg>
{/if}
{#if icon === 'toc'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"/></svg>
{/if}
{#if icon === 'functions'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z"/></svg>
{/if}
{#if icon === 'format_list_numbered'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"/></svg>
{/if}
{#if icon === 'format_list_bulleted'}
<svg class={_iconClass} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/></svg>
{/if}
{#if icon === 'custom_heading1'}
<svg class={_iconClass} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="A4" transform="translate(-217.000000, -597.000000)"><g id="H1" transform="translate(217.000000, 597.000000)"><rect id="Rectangle" x="0" y="0" width="24" height="24"></rect><polygon id="Shape" fill="#505E76" fill-rule="nonzero" points="19.3 17.5 17.8 17.5 17.8 13 16.3 13 16.3 11.5 19.3 11.5"></polygon><polygon id="Shape" fill="#505E76" fill-rule="nonzero" points="10.3 10.1666667 6.7 10.1666667 6.7 6.5 4 6.5 4 17.5 6.7 17.5 6.7 12.9166667 10.3 12.9166667 10.3 17.5 13 17.5 13 6.5 10.3 6.5"></polygon></g></g></g></svg>
{/if}
{#if icon === 'custom_heading2'}
<svg class={_iconClass} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="A4" transform="translate(-249.000000, -597.000000)"><g id="H2" transform="translate(249.000000, 597.000000)"><rect id="Rectangle" x="0" y="0" width="24" height="24"></rect><polygon id="Shape" fill="#505E76" fill-rule="nonzero" points="10.3 10.1666667 6.7 10.1666667 6.7 6.5 4 6.5 4 17.5 6.7 17.5 6.7 12.9166667 10.3 12.9166667 10.3 17.5 13 17.5 13 6.5 10.3 6.5"></polygon><path d="M19,15 L17,15 L17,16 L20,16 L20,17.5 L15.5,17.5 L15.5,15 C15.5,14.45 15.95,14 16.5,14 L18.5,14 L18.5,13 L15.5,13 L15.5,11.5 L19,11.5 C19.55,11.5 20,11.95 20,12.5 L20,14 C20,14.55 19.55,15 19,15 Z" id="Shape" fill="#505E76" fill-rule="nonzero"></path></g></g></g></svg>
{/if}
{#if icon === 'custom_heading3'}
<svg class={_iconClass} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="A4" transform="translate(-281.000000, -597.000000)"><g id="H3" transform="translate(281.000000, 597.000000)"><rect id="Rectangle" x="0" y="0" width="24" height="24"></rect><polygon id="Shape" fill="#505E76" fill-rule="nonzero" points="10.3 10.1666667 6.7 10.1666667 6.7 6.5 4 6.5 4 17.5 6.7 17.5 6.7 12.9166667 10.3 12.9166667 10.3 17.5 13 17.5 13 6.5 10.3 6.5"></polygon><path d="M20,16.5 C20,17.05 19.55,17.5 19,17.5 L15.5,17.5 L15.5,16 L18.5,16 L18.5,15 L16.5,15 L16.5,14 L18.5,14 L18.5,13 L15.5,13 L15.5,11.5 L19,11.5 C19.55,11.5 20,11.95 20,12.5 L20,16.5 Z" id="Shape" fill="#505E76" fill-rule="nonzero"></path></g></g></g></svg>
{/if}
{#if icon === 'custom_heading4'}
<svg class={_iconClass} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="A4" transform="translate(-313.000000, -597.000000)"><g id="H4" transform="translate(313.000000, 597.000000)"><rect id="Rectangle" x="0" y="0" width="24" height="24"></rect><polygon id="Shape" fill="#505E76" fill-rule="nonzero" points="10.3 10.1666667 6.7 10.1666667 6.7 6.5 4 6.5 4 17.5 6.7 17.5 6.7 12.9166667 10.3 12.9166667 10.3 17.5 13 17.5 13 6.5 10.3 6.5"></polygon><polygon id="Shape" fill="#505E76" fill-rule="nonzero" points="21 16 20 16 20 17.5 18.5 17.5 18.5 16 15.5 16 15.5 11.5 17 11.5 17 14.5 18.5 14.5 18.5 11.5 20 11.5 20 14.5 21 14.5"></polygon></g></g></g></svg>
{/if}
{#if icon === 'custom_heading5'}
<svg class={_iconClass} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="A4" transform="translate(-345.000000, -597.000000)"><g id="H5" transform="translate(345.000000, 597.000000)"><rect id="Rectangle" x="0" y="0" width="24" height="24"></rect><polygon id="Shape" fill="#505E76" fill-rule="nonzero" points="10.3 10.1666667 6.7 10.1666667 6.7 6.5 4 6.5 4 17.5 6.7 17.5 6.7 12.9166667 10.3 12.9166667 10.3 17.5 13 17.5 13 6.5 10.3 6.5"></polygon><path d="M20,13 L17,13 L17,14 L19,14 C19.55,14 20,14.45 20,15 L20,16.5 C20,17.05 19.55,17.5 19,17.5 L15.5,17.5 L15.5,16 L18.5,16 L18.5,15 L15.5,15 L15.5,11.5 L20,11.5 L20,13 Z" id="Shape" fill="#505E76" fill-rule="nonzero"></path></g></g></g></svg>
{/if}
{#if icon === 'custom_heading6'}
<svg class={_iconClass} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="A4" transform="translate(-377.000000, -597.000000)"><g id="H6" transform="translate(377.000000, 597.000000)"><rect id="Rectangle" x="0" y="0" width="24" height="24"></rect><polygon id="Shape" fill="#505E76" fill-rule="nonzero" points="10.3 10.1666667 6.7 10.1666667 6.7 6.5 4 6.5 4 17.5 6.7 17.5 6.7 12.9166667 10.3 12.9166667 10.3 17.5 13 17.5 13 6.5 10.3 6.5"></polygon><path d="M20,11.5 L20,13 L17,13 L17,14 L19,14 C19.55,14 20,14.45 20,15 L20,16.5 C20,17.05 19.55,17.5 19,17.5 L16.5,17.5 C15.95,17.5 15.5,17.05 15.5,16.5 L15.5,12.5 C15.5,11.95 15.95,11.5 16.5,11.5 L20,11.5 Z M18.5,15 L17,15 L17,16.5 L18.5,16.5 L18.5,15 Z" id="Shape" fill="#505E76" fill-rule="nonzero"></path></g></g></g></svg>
{/if}

