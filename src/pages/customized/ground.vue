<template>
  <div class="ground-wrapper">
    <div class="banner">
      <Banner v-for="item in bannerData" v-bind="item" :key="item"></Banner>
    </div>
    <div class="solution-list">
      <div class="list-container">
        <CategoryBox
          v-for="(item, index) in categoryInfo"
          :key="index"
          :info="item"
          class="categoryBox"
        ></CategoryBox>
      </div>
    </div>
    <ContactBar v-for="(item, index) in barInfo" :key="index" :info="item"></ContactBar>
  </div>
</template>
<script>
import Banner from "../../components/banner";
import CategoryBox from "../../components/SolutionBlock/categoryBox";
import ContactBar from "../../components/contactBar";
export default {
  components: {
    Banner,
    CategoryBox,
    ContactBar
  },
  data() {
    return {
      bannerData: [
        {
          line1: "麥斯解決方案全覽"
        }
      ],
      categoryInfo: [
        {
          category: "WIN",
          router: "winDHCP",
          routerName: "DHCP/DHCP Cluster服務",
          router2: "winActive",
          routerName2: "Active Directory Rights Management Services 2.0",
          router3: "winIPAM",
          routerName3: "IPAM服務",
          router4: "winServerUpdate",
          routerName4: "Windows Server Update Service",
          router5: "",
          routerName5: "WDS/RIS/KickStart服務",
          router6: "",
          routerName6: "NPS服務",
          router7: "",
          routerName7: "Active Directory Services服務",
          router8: "",
          routerName8: "ADMT網域移轉及搬遷服務",
          router9: "",
          routerName9: "Active Directory Services Rename服務",
          router10: "",
          routerName10: "ADFS服務",
          router11: "",
          routerName11: "Files Server服務",
          router12: "",
          routerName12: "Printer Server服務",
          router13: "",
          routerName13: "CA 憑證主機服務",
          router14: "",
          routerName14: "無線管理服務",
          router15: "",
          routerName15: "Windows Deployment MDT 2016服務",
          router16: "",
          routerName16: "WSUS服務"
        },
        {
          category: "MGT",
          router: "mdop",
          routerName: "MDOP MBAM Bitlocker Management服務",
          router2: "exchange",
          routerName2: "Exchange Server服務",
          router3: "project",
          routerName3: "Project Server服務",
          router4: "share",
          routerName4: "SharePoint Server服務",
          router5: "/configuration",
          routerName5: "System Center"
        },
        {
          category: "VM",
          router: "/MicrosoftS2D",
          routerName: "Microsoft",
          router2: "/redhat-openshift",
          routerName2: "Redhat",
          router3: "/vm-ESXi",
          routerName3: "VMware",
          router4: "/open-stack",
          routerName4: "IBM",
          router5: "/proxmox-HCI",
          routerName5: "Proxmox"
        },
        {
          category: "VDI",
          router: "/VDI-HyperV",
          routerName: "Microsoft",
          router2: "/VMwareHorzion",
          routerName2: "VMware",
          router3: "/CitrixAPP",
          routerName3: "Citrix"
        },
        {
          category: "UC",
          router: "",
          routerName: "Skype For Business服務",
          router2: "",
          routerName2: "Lync 2013/2010服務"
        },
        {
          category: "DB",
          router: "/buildMYSQL",
          routerName: "MySQL",
          router2: "/msSQLUpgrade",
          routerName2: "Microsoft"
        },

        {
          category: "DEV",
          router: "",
          routerName: "TFS服務",
          router2: "",
          routerName2: "Windows Container服務",
          router3: "",
          routerName3: "Azure DevOps Sever 2019服務"
        },
        {
          category: "Other",
          router: "mim",
          routerName: "MIM(身份識別)",
          router2: "",
          routerName2: "WebAD",
          router3: "",
          routerName3: "WSUS客制化報表服務",
          router4: "",
          routerName4: "WAC客制化服務",
          router5: "",
          routerName5: "WAC Hyper-V  效能監控服務   ???"
        }
      ],
      barInfo: [
        {
          line1: "解決方案",
          line2: "",
          line3: ""
        }
      ]
    };
  }
};
</script>
<style lang="scss" >
@import "@/assets/css/setting.scss";
.banner {
  background-image: url("./../../assets/img/ground-bg.jpg");
  background-size: cover;
  background-position-y: 30%;
  background-position-x: 25%;
  background-repeat: no-repeat;

  .banner-container {
    width: 100%;
    height: 520px;
    position: relative;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;

    .text {
      width: 80%;

      h1 {
        position: relative;
        font-size: 40px;
        font-weight: 400;
        width: 100%;
        box-sizing: border-box;
        color: white;
        margin: 5px auto;
        text-align: center;
        border-bottom: 1px solid white;
        padding-bottom: 20px;
        box-sizing: border-box;
      }
    }
  }
}
@media (max-width: 375px) {
  .banner {
    .banner-container {
      .text {
        h1 {
          font-size: 35px;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@import "@/assets/css/setting.scss";

.solution-list {
  width: 100%;
  column-count: 3;
  padding: 30px;
  margin: 0 auto;
  background-image: url("./../../assets/img/about-us-bg-2.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: 100%;
  .item {
    width: 200%;
    break-inside: avoid;
    height: auto;
    flex-direction: column;
    margin-top: 0px;
    
  }
}

@media (max-width: 1024px) {
  .solution-list {
    width: 90%;
    column-count: 2;
  }

  .item {
    width: 100%;
  }
}

@media (max-width: 767px) {
  .solution-list {
    column-count: 1;
  }
}
</style>