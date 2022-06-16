<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="secondary">
                <ion-buttons  slot="start">
                    <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
                </ion-buttons>
                <ion-title>{{ pageTitle }}</ion-title>
                <ion-buttons slot="end">
                    <slot name="actions-end"></slot>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <slot />
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent } from '@ionic/vue';
export default {
    props: ['pageTitle', 'pageDefaultBackLink'],
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonTitle,
        IonContent
    }
}
</script>
