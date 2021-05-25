<template>
  <div>
    <Menu />
    <GoogleMapLoader  :mapConfig="mapConfig" apiKey="AIzaSyAPSrFYRCzWLnk8mHxmMrl0DSm8fvHOjXM">
      <template slot-scope="{ google, map }">
        <GoogleMapMarker
          v-for="marker in markers"
          :key="marker.id"
          :marker="marker"
          :google="google"
          :map="map"
        />
        <GoogleMapLine
          v-for="line in lines"
          :key="line.id"
          :path.sync="line.path"
          :google="google"
          :map="map"
        />
      </template>
    </GoogleMapLoader>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import GoogleMapLoader from "@/components/GoogleMapLoader";
import GoogleMapLine from "@/components/GoogleMapLine";
import GoogleMapMarker from "@/components/GoogleMapMarker";
import { mapSettings } from "@/constants/mapSettings";

export default {
  name: "DondeEstamos",
  components: {
    Menu,
    GoogleMapLoader,
    GoogleMapLine,
    GoogleMapMarker,
  },
  data() {
    return {
      markers: [
        { id: "a", position: { lat: 3, lng: 101 } },
        { id: "b", position: { lat: 5, lng: 99 } },
        { id: "c", position: { lat: 6, lng: 97 } },
      ],
      lines: [
        {
          id: "1",
          path: [
            { lat: 3, lng: 101 },
            { lat: 5, lng: 99 },
          ],
        },
        {
          id: "2",
          path: [
            { lat: 5, lng: 99 },
            { lat: 6, lng: 97 },
          ],
        },
      ],
    };
  },

  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: { lat: -32.886231, lng: -68.838358 },
      };
    },

    mapCenter() {
      return this.markers[1].position;
    },
  },
};
</script>

<style>
</style>