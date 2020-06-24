import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import layout from '../layout/dashboard.vue';
import Index from '../pages/index.vue';
//錯誤訊息相關頁面
import Training from './../pages/training.vue';
import NotFound from './../pages/404.vue';
//關於
import AboutMaxlabs from '../pages/about/maxlabs.vue';
//雲端服務
import AliCloud from '../pages/cloud/ali.vue';
import Amazon from '../pages/cloud/aws.vue';
import Azure from '../pages/cloud/azure.vue';
import GCP from '../pages/cloud/gcp.vue';
import GSuite from '../pages/cloud/gsuite.vue';
import Office365 from '../pages/cloud/office365.vue';
//代理產品
import Adobe from '../pages/agent/adobe.vue';
import Microsoft from '../pages/agent/microsoft.vue';
import OpenLicense from '../pages/agent/helper/open-license.vue';
import AgentSPLA from '../pages/agent/helper/SPLA.vue';
import Microsoft365 from "../pages/agent/helper/microsoft365.vue";
import HyperV from '../pages/agent/helper/hyper-v.vue';
import SystemCenter from '../pages/agent/helper/system-center.vue';
import AgentAzure from '../pages/agent/helper/azure.vue';
import AzurePack from '../pages/agent/helper/azure-pack.vue';
import VMware from '../pages/agent/vmware.vue';
import Mail2000 from '../pages/agent/mail2000.vue';
import AgentSSL from '../pages/agent/ssl.vue';
import SPLArent from '../pages/agent/SPLA-rent.vue';
import vCANrent from '../pages/agent/vCAN-rent.vue'

import AudioCodes from '../pages/agent/audiocodes.vue';
import HardWareASUS from '../pages/agent/asus.vue';
//關於麥斯
import Cooperation from '../components/cooperation.vue';
import Investment from './../components/investment.vue';
import Recuit from '../components/recuit.vue';
import Contact from './../components/contact.vue';
import MemberLogin from '../pages/memeber/login.vue';
//客製
import WebsiteCustomized from '../pages/customized/website-customized.vue';
import ProgrameCustomized from '../pages/customized/program-customized.vue';
import APPCustomized from '../pages/customized/app-customized.vue';
import APPChoice from '../pages/customized/helper/app/chioce.vue';
import APPCost from '../pages/customized/helper/app/cost.vue';
import APPKnowledge from '../pages/customized/helper/app/knowledge.vue';
import APPseo from '../pages/customized/helper/app/seo.vue';
import APPreason from '../pages/customized/helper/app/reason.vue';
import GroundSolutions from '../pages/customized/ground.vue';
import VDIMicrosoft from '../pages/customized/helper/ground-VDI/microsoft.vue';
import VDIHyperV from '../pages/customized/helper/ground-VDI/Hyper-V.vue';
import VDIappV from '../pages/customized/helper/ground-VDI/app-v.vue';
import VDImedV from '../pages/customized/helper/ground-VDI/med-v.vue';
import MultiPoint from '../pages/customized/helper/ground-VDI/multi-point.vue';
import RemoteDesktop from '../pages/customized/helper/ground-VDI/remote-desktop.vue';
import VDIVMware from '../pages/customized/helper/ground-VDI/VMware.vue';
import VMwareHorzion from '../pages/customized/helper/ground-VDI/vmware-horzion.vue';
import VDICitrix from '../pages/customized/helper/ground-VDI/Citrix.vue';
import CitrixAPP from '../pages/customized/helper/ground-VDI/citrix-app.vue';
import CitrixHyper from '../pages/customized/helper/ground-VDI/citrix-hyper.vue';
import CitriVirtual from '../pages/customized/helper/ground-VDI/citrix-virtual.vue';
import CitriWorkspace from '../pages/customized/helper/ground-VDI/citrix-workspace.vue';
import CloudSolutions from '../pages/customized/cloud.vue';
import VMMicrosoft from '../pages/customized/helper/ground-VM/microsoft.vue';
import MicrosoftS2D from '../pages/customized/helper/ground-VM/S2D.vue';
import MicrosoftCluster from '../pages/customized/helper/ground-VM/cluster.vue';
import MicrosoftReplica from '../pages/customized/helper/ground-VM/replica.vue';
import VMRedHat from '../pages/customized/helper/ground-VM/red-hat.vue';
import RedhatOpenShift from '../pages/customized/helper/ground-VM/open-shift.vue';
import RedhatKVM from '../pages/customized/helper/ground-VM/kvm.vue';
import VMVMware from '../pages/customized/helper/ground-VM/vmware.vue';
import VMwareESXI from '../pages/customized/helper/ground-VM/ESXI.vue';
import VMvCenter from '../pages/customized/helper/ground-VM/vCenter.vue';
import VMibm from '../pages/customized/helper/ground-VM/IBM.vue';
import IBMOpenStack from '../pages/customized/helper/ground-VM/open-stack.vue';
import Proxmox from '../pages/customized/helper/ground-VM/proxmox.vue';
import ProxmoxCluster from '../pages/customized/helper/ground-VM/proxmox-cluster.vue';
import ProxmoxHCI from '../pages/customized/helper/ground-VM/HCI.vue';
import MGTSystemCenter from '../pages/customized/helper/ground-MGT/system-center.vue';
import SystemConfiguration from '../pages/customized/helper/ground-MGT/configuration.vue';
import SystemData from '../pages/customized/helper/ground-MGT/data.vue';
import SystemOrchestrator from '../pages/customized/helper/ground-MGT/orchestrator.vue';
import SystemService from '../pages/customized/helper/ground-MGT/service.vue';
import SystemVirtual from '../pages/customized/helper/ground-MGT/virtual.vue';
import SystemOperations from '../pages/customized/helper/ground-MGT/operations .vue';
import MGTmdop from '../pages/customized/helper/ground-MGT/MDOP.vue';
import MGTExchange from '../pages/customized/helper/ground-MGT/exchange.vue';
import MGTProject from '../pages/customized/helper/ground-MGT/project.vue';
import MGTShare from '../pages/customized/helper/ground-MGT/share.vue';
import otherMIM from '../pages/customized/helper/ground-other/MIM.vue';
import winActive from '../pages/customized/helper/ground-WIN/active.vue';
import winDCHP from '../pages/customized/helper/ground-WIN/DHCP-cluster.vue';
import winIPAM from '../pages/customized/helper/ground-WIN/IPAM.vue';
import winServerUpdate from '../pages/customized/helper/ground-WIN/serve-update.vue';
//顧問服務
import AdviceOffice365 from '../pages/advice/office365.vue';
import AdviceService from '../pages/advice/service.vue';
import Partner from './../components/partner.vue';
import Privacy from './../components/privacy.vue';
//培訓課程
import OpenCourse from '../pages/course/open.vue';
//最新
import Latest from '../pages/latest/latest.vue';
import LatestPromotion from '../pages/latest/promotion.vue';
import LatestPromotionMicrosoft from '../pages/latest/promotion-microsoft.vue';
import LatestVideo from '../pages/latest/video.vue';
import LatestNews from '../pages/latest/news/brand.vue';
import LatestNewsMicrosoft from '../pages/latest/news/brand-microsoft.vue';
import LatestMaxlabs from '../pages/latest/news/maxlabs.vue';
import LatestUpdate from '../pages/latest/news/max-update.vue';
// 品牌新訊內容
import Content20200516 from './../components/content/content-20200516.vue';
import Content20200521 from './../components/content/content-20200521.vue';
import Maxlabs202200516 from './../components/content/maxlabs-20200516.vue';
import Maxlabs202000519 from './../components/content/maxlabs-20200519.vue';
import Maxlabs20191207 from './../components/content/maxlabs-20191207.vue';
import Maxlabs20191012 from './../components/content/maxlabs-20191012.vue';

export default new VueRouter({

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [{

      path: '/',
      component: layout,
      children: [{
          name: '首頁',
          path: '/',
          component: Index,
          meta: {
            title: '麥斯創新 - 首頁'
          },
        },
        {
          name: '公有雲-Azure',
          path: 'azure',
          component: Azure,
          meta: {
            title: '麥斯創新 - Azure'
          }
        }, {
          name: '公有雲-Office365',
          path: 'office365',
          component: Office365,
          meta: {
            title: '麥斯創新 - Office 365'
          }
        },
        {
          name: '公有雲-Amazon',
          path: 'aws',
          component: Amazon,
          meta: {
            title: '麥斯創新 - Amazon'
          }
        }, {
          name: '公有雲-GoogleCloudPlateform',
          path: 'gcp',
          component: GCP,
          meta: {
            title: '麥斯創新 - Google Cloud Plateform'
          }
        }, {
          name: '公有雲-GSuite',
          path: 'g-suite',
          component: GSuite,
          meta: {
            title: '麥斯創新 -  G-Suite'
          }
        },
        {
          name: "公有雲-AliCloud",
          path: 'ali-cloud',
          component: AliCloud,
          meta: {
            title: '麥斯創新 -  阿里雲'
          }
        },
        {
          name: 'office365顧問服務',
          path: 'advice-office365',
          component: AdviceOffice365,
          meta: {
            title: '麥斯創新 - Office 365 顧問服務'
          }
        },
        {
          name: '雲端技術顧問服務',
          path: 'advice-service',
          component: AdviceService,
          meta: {
            title: '麥斯創新 - 雲端技術顧問服務'
          }
        },
        {
          name: '最新消息',
          path: '/update',
          component: Latest,
          meta: {
            title: '麥斯創新 -  最新消息'
          },
          children: [{
              name: "促銷訊息",
              path: '/promotion/ms',
              component: LatestPromotion,
              meta: {
                title: '麥斯創新 -  促銷訊息'
              },
              children: [{
                  name: '微軟促銷',
                  path: '/promotion/ms',
                  component: LatestPromotionMicrosoft,
                  meta: {
                    title: '麥斯創新 -  微軟促銷'
                  }
                },
                {
                  name: 'office365限時優惠',
                  path: '/20200516',
                  component: Content20200516,
                  meta: {
                    title: '麥斯創新 - office 365 限時優惠'
                  }

                }
              ]

            },
            {
              name: "品牌新訊",
              path: '/latest/ms',
              component: LatestNews,
              meta: {
                title: '麥斯創新 - 品牌新訊'
              },
              children: [{
                  name: '微軟新訊',
                  path: '/latest/ms',
                  component: LatestNewsMicrosoft,
                  meta: {
                    title: '麥斯創新 - 微軟新訊'
                  }
                }, {
                  name: '雲端辦公新潮流 Microsoft雲端辦公方案 資安問題免煩惱',
                  path: '/20200521',
                  component: Content20200521,
                  meta: {
                    title: '麥斯創新 - 雲端辦公新潮流 Microsoft雲端辦公方案 資安問題免煩惱'
                  }
                }

              ]

            }, {
              name: '麥斯影片',
              path: '/video',
              component: LatestVideo,
              meta: {
                title: '麥斯創新 - 麥斯影片'
              }
            }, {
              name: '麥斯動態',
              path: '/update',
              component: LatestMaxlabs,
              meta: {
                title: '麥斯創新 - 麥斯動態'
              },
              children: [{
                  name: '麥斯最新消息',
                  path: '/update',
                  component: LatestUpdate,
                  meta: {
                    title: '麥斯創新 - 最新消息'
                  }
                }, {
                  name: 'Maxlabs官網上線',
                  path: '/maxlabs/20200516',
                  component: Maxlabs202200516,
                  meta: {
                    title: '麥斯創新 - 官網上線'
                  },

                }, {
                  name: "輕鬆防疫超前部署雲端辦公新潮流線上直播",
                  path: '/maxlabs/20200519',
                  component: Maxlabs202000519

                }, {
                  name: "DevFest Kaohsiung 2019",
                  path: '/maxlabs/20191207',
                  component: Maxlabs20191207
                }, {
                  name: '麥斯創新在 Lenovo 2019 Transform 3.0 推出 ALTO 自動化部屬平台',
                  path: '/maxlabs/20191012',
                  component: Maxlabs20191012

                }

              ]

            }

          ]
        },
        {
          name: '代理-Adobe',
          path: 'agent-adobe',
          component: Adobe,
          meta: {
            title: '麥斯創新 - 代理 Adobe'
          }

        }, {
          name: '代理-VMware',
          path: 'agent-vmware',
          component: VMware,
          meta: {
            title: '麥斯創新 - 代理 VMware'
          },

        }, {
          name: '代理-Microsoft',
          path: 'agent-microsoft',
          component: Microsoft,
          meta: {
            title: '麥斯創新 - 代理 Microsoft'
          },
          children: [{
              name: '代理-OpenLicense',
              path: '/agent-openlicense',
              component: OpenLicense
            }, {
              name: '代理-Microsoft 365',
              path: '/agent-microsoft365',
              component: Microsoft365
            }, {
              name: "代理-SPLA",
              path: '/agent-spla',
              component: AgentSPLA
            }, {
              name: '代理-HyperV',
              path: '/agent-hyper-v',
              component: HyperV
            }, {
              name: '代理-SystemCenter',
              path: '/agent-system-center',
              component: SystemCenter
            }, {
              name: '代理-Azure',
              path: '/agent-azure',
              component: AgentAzure
            }, {
              name: '代理-AzurePack',
              path: '/agent-azurepack',
              component: AzurePack
            },




          ]
        },
        {
          name: '代理-Mail2000',
          path: 'agent-mail2000',
          component: Mail2000,
          meta: {
            title: '麥斯創新 - 代理 Mail2000'
          }
        }, 
        {
          name: "代理-MicrosoftSPLA",
          path: 'agent-SPLArent',
          component: SPLArent,
          meta: {
            title: '麥斯創新 - 代理 Microsoft SPLA'
          }
        }, {
          name: '代理-VMware vCAN',
          path: 'agent-vCAN',
          component: vCANrent,
          meta: {
            title: '麥斯創新 - 代理 VMware vCAN'
          }
        }, {
          name: '硬體設備-AudioCodes',
          path: 'hardware-audiocodes',
          component: AudioCodes,
          meta: {
            title: '麥斯創新 - 代理 AudioCodes'
          }
        }, {
          name: "硬體設備-ASUS",
          path: 'hardware-asus',
          component: HardWareASUS,
          meta: {
            title: '麥斯創新 - 代理 '
          }
        },
        {
          name: "SSL 第三方憑証",
          path: "agent-SSL",
          component: AgentSSL,
          meta: {
            title: '麥斯創新 - 代理 SSL 第三方憑證'
          }
        },
        {
          name: '程式客製化服務',
          path: 'prog-customized',
          component: ProgrameCustomized,
          meta: {
            title: '麥斯創新 - 程式客製化服務'
          }
        }, {
          name: '網站客製化服務',
          path: 'website-customized',
          component: WebsiteCustomized,
          meta: {
            title: '麥斯創新 - 網站客製化服務'
          }
        }, {
          name: "APP客製化服務",
          path: 'app-customized',
          component: APPCustomized,
          meta: {
            title: '麥斯創新 - APP 客製化服務'
          }
        }, {
          name: "了解APP與網站製作費用差異",
          path: 'app-cost',
          component: APPCost,
          meta: {
            title: '麥斯創新 - APP 客製化服務'
          }
        }, {
          name: "該做手機版網站還是 MOBILE APP呢",
          path: 'app-chioce',
          component: APPChoice,
          meta: {
            title: '麥斯創新 - APP 客製化服務'
          }
        }, {
          name: "製作網站與APP前你必須了解的四種知識",
          path: 'app-knowledge',
          component: APPKnowledge,
          meta: {
            title: '麥斯創新 - APP 客製化服務'
          }
        }, {
          name: "你的網站需要做SEO嗎?",
          path: 'app-SEO',
          component: APPseo,
          meta: {
            title: '麥斯創新 - APP 客製化服務'
          }
        },{
          name: "五個原因告訴你為什麼需要客製化網站或APP",
          path: 'app-reason',
          component: APPreason,
          meta: {
            title: '麥斯創新 - APP 客製化服務'
          }
        },
        {
          name: '雲端解決方案',
          path: 'cloud-solutions',
          component: CloudSolutions,
          meta: {
            title: '麥斯創新 - 雲端解決方案'
          }
        }, {
          name: '地端解決方案',
          path: "ground-solution",
          component: GroundSolutions,
          meta: {
            title: '麥斯創新 - 地端解決方案'
          }
        },
        {
          name: "VDI-Microsoft",
          path: "/VDI-HyperV",
          component: VDIMicrosoft,
          meta: {
            title: 'VDI-Microsoft'
          },
          children: [{
              name: "VDI-HyperV",
              path: "/VDI-HyperV",
              component: VDIHyperV

            }, {
              name: "VDIappV",
              path: "/VDI-VDIappV",
              component: VDIappV
            }, {
              name: "VDImedV",
              path: "/VDI-VDImedV",
              component: VDImedV
            }, {
              name: "MultiPoint",
              path: "/VDI-MultiPoint",
              component: MultiPoint
            }, {
              name: "RemoteDesktop",
              path: "/RemoteDesktop",
              component: RemoteDesktop
            }

          ]

        }, {
          name: "VDI-VMware",
          path: "/VMwareHorzion",
          component: VDIVMware,
          meta: {
            title: 'VDI-VMware'
          },
          children: [{
            name: "VMware-Horzion",
            path: "/VMwareHorzion",
            component: VMwareHorzion
          }]

        }, {
          name: "VDICitrix",
          path: "/CitrixAPP",
          component: VDICitrix,
          meta: {
            title: 'VDI-Citrix'
          },
          children: [{
              name: "CitrixAPP",
              path: "/CitrixAPP",
              component: CitrixAPP
            }, {
              name: "CitrixHyper",
              path: "/CitrixHyper",
              component: CitrixHyper
            }, {
              name: "CitriVirtual",
              path: "/CitriVirtual",
              component: CitriVirtual
            },
            {
              name: "CitriWorkspace",
              path: "/CitriWorkspace",
              component: CitriWorkspace
            },

          ]
        }, {
          name: "VMMicrosoft",
          path: "/CitrixAPP",
          component: VMMicrosoft,
          meta: {
            title: 'VM-Microsoft'
          },
          children: [{
              name: "MicrosoftS2D ",
              path: "/MicrosoftS2D",
              component: MicrosoftS2D
            }, {
              name: "MicrosoftCluster",
              path: "/MicrosoftCluster",
              component: MicrosoftCluster
            },
            {
              name: "MicrosoftReplica",
              path: "/MicrosoftReplica",
              component: MicrosoftReplica
            }

          ]


        }, {
          name: "VMRedhat",
          path: "/redhat-openshift",
          component: VMRedHat,
          meta: {
            title: "VM-Red hat"
          },
          children: [{
              name: "Red hat OpenShift服務",
              path: '/redhat-openshift',
              component: RedhatOpenShift
            }, {
              name: "Red hat KVM服務",
              path: '/redhat-kvm',
              component: RedhatKVM
            }

          ]
        },
        {
          name: "VMVMware",
          path: "/vm-ESXi",
          component: VMVMware,
          meta: {
            title: "VM-VMware"
          },
          children: [{
              name: "ESXi Hypervisor服務",
              path: '/vm-ESXi',
              component: VMwareESXI
            }, {
              name: "vCenter Server Appliance服務",
              path: '/vm-vcenter',
              component: VMvCenter
            }

          ]
        },
        {
          name: "VMIBM",
          path: "/open-stack",
          component: VMibm,
          meta: {
            title: 'VM - IBM'
          },
          children: [{
            name: "VM-Open Stack",
            path: "/open-stack",
            component: IBMOpenStack
          }]

        }, {
          name: "Proxmox",
          path: "/proxmox-HCI",
          component: Proxmox,
          meta: {
            title: 'VM - Proxmox'
          },
          children: [{
            name: "ProxmoxHCI",
            path: "/proxmox-HCI",
            component: ProxmoxHCI

          }]
        },
        {
          name: "MGTSystemCenter",
          path: "/configuration",
          component: MGTSystemCenter,
          meta: {
            title: 'MGT - System Center'
          },
          children: [{
              name: "System Configuration",
              path: "/configuration",
              component: SystemConfiguration
            }, {
              name: "System Data",
              path: "/system-data",
              component: SystemData
            }, {
              name: "System Orchestrator",
              path: "/orchestrator",
              component: SystemOrchestrator
            }, {
              name: "System Service",
              path: "/system-service",
              component: SystemService
            }, {
              name: "System Virtual",
              path: "/system-virtual",
              component: SystemVirtual
            }, {
              name: "System Operations",
              path: "/system-operations",
              component: SystemOperations

            }


          ]

        }, {
          name: "MDOP",
          path: 'mdop',
          component: MGTmdop,
          meta: {
            title: 'MGT - MDOP'
          }
        },
        {
          name: "Exchange Sever",
          path: 'exchange',
          component: MGTExchange,
          meta: {
            title: 'MGT - Exchange'
          }
        }, {
          name: "Project Server",
          path: "project",
          component: MGTProject,
          meta: {
            title: "MGT-Project Manager"
          },
        }, {
          name: "SharePoint Server",
          path: "share",
          component: MGTShare,
          meta: {
            title: "MGT- Manager"
          },
        }, {
          name: "Other-Microsoft Identity Manager",
          path: "mim",
          component: otherMIM

        }, {
          name: "WIN-Active Directory Rights Management Service",
          path: "winActive",
          component: winActive

        }, {
          name: "WIN-DHCP Cluster務建置服務",
          path: "winDHCP",
          component: winDCHP
        }, {
          name: "WIN-IPAM務建置服務",
          path: "winIPAM",
          component: winIPAM
        }, {
          name: "WIN-Windows Server Update Service",
          path: "winServerUpdate",
          component: winServerUpdate
        },
        {
          name: "2020公開課程",
          path: 'open-course',
          component: OpenCourse,
          meta: {
            title: "麥斯創新 - 2020 公開課程"
          }
        },
        {
          name: '關於我們',
          path: 'about',
          component: AboutMaxlabs,
          meta: {
            title: '麥斯創新 - 關於我們'
          }
        },
        {
          name: '商業合作',
          path: 'cooperation',
          component: Cooperation,
          meta: {
            title: '麥斯創新 - 商業合作'
          }
        },
        {
          name: "商業投資",
          path: "investment",
          component: Investment,
          meta: {
            title: '麥斯創新 - 商業投資'
          }
        },
        {
          name: '麥斯徵才',
          path: 'recuit',
          component: Recuit,
          meta: {
            title: '麥斯創新 - 麥斯徵才'
          }
        },
        {
          name: '聯絡我們',
          path: 'contact',
          component: Contact,
          meta: {
            title: '麥斯創新 - 聯絡我們'
          }
        },
        {
          name: '登入',
          path: 'sign-in',
          component: MemberLogin,
          meta: {
            title: '麥斯創新 - 會員登入'
          }
        },
        {
          name: '合作夥伴',
          path: 'our-partner',
          component: Partner,
          meta: {
            title: '麥斯創新 - 合作夥伴'
          }
        },
        {
          name: '隱私權聲明',
          path: 'privacy',
          component: Privacy,
          meta: {
            title: '麥斯創新 - 隱私權聲明 '
          }
        }

      ]
    },
    {
      name: 'Not Found',
      path: '/under-construction',
      component: NotFound,
      meta: {
        title: '麥斯創新 - 頁面建構中'
      }
    },
    {
      name: "Training",
      path: '/trainging',
      component: Training,
      meta: {
        title: '麥斯創新 - 即將開課'
      }
    }


  ],

});