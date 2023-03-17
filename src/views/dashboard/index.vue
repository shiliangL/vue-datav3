<template>
    <div>
        dashboard

        <div @click="createPanelWin"> createPanel </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import useCreatePanel from '@/hook/useCreatePanel'

export default defineComponent({
  setup () {
    const data2 = [
      {
        iD: 'ProjectTree_Root',
        index: 0,
        parentIndex: -1,
        name: '世界',
        visiblity: false,
        type: 'EPT_Folder'
      },
      {
        iD: '30D6EC1B489B6A18137AA8B4FC809A12',
        index: 1,
        parentIndex: 0,
        name: '安庆市',
        visiblity: false,
        type: 'EPT_Folder'
      },
      {
        iD: '62DAC7144ECF80EFD9E50D85D90A18CA',
        index: 2,
        parentIndex: 1,
        name: '基础图层',
        visiblity: false,
        type: 'EPT_Folder'
      },
      {
        iD: '69C6AF314F44744CCE260791366FC8FE',
        index: 3,
        parentIndex: 2,
        name: '倾斜',
        visiblity: false,
        type: 'EPT_Folder'
      },
      {
        iD: 'qingxie_1',
        index: 4,
        parentIndex: 3,
        name: '安庆',
        visiblity: false,
        type: 'EPT_Scene'
      },
      {
        iD: 'ECD473A748395840B6ECF18BB7A49069',
        index: 5,
        parentIndex: 4,
        name: 'ECD473A748395840B6ECF18BB7A49069',
        visiblity: false,
        type: 'EPT_CutPolygonModifier'
      },
      {
        iD: 'AA0C4578452A3F100A6F528404502DED',
        index: 6,
        parentIndex: 4,
        name: 'AA0C4578452A3F100A6F528404502DED',
        visiblity: false,
        type: 'EPT_CutPolygonModifier'
      },
      {
        iD: '40BAB7ED4EF741AC6A2CAA8092A5BFA3',
        index: 7,
        parentIndex: 4,
        name: '40BAB7ED4EF741AC6A2CAA8092A5BFA3',
        visiblity: false,
        type: 'EPT_CutPolygonModifier'
      },
      {
        iD: 'F5DD57864E0BC0426866BCA4B1670828',
        index: 8,
        parentIndex: 4,
        name: 'F5DD57864E0BC0426866BCA4B1670828',
        visiblity: false,
        type: 'EPT_CutPolygonModifier'
      },
      {
        iD: '58C2803C47F2DE2D0AC775989F6DF4F4',
        index: 9,
        parentIndex: 4,
        name: '58C2803C47F2DE2D0AC775989F6DF4F4',
        visiblity: false,
        type: 'EPT_CutPolygonModifier'
      },
      {
        iD: '3D1D7F8E4C2CB82A1082F7BA0C9D8A57',
        index: 10,
        parentIndex: 4,
        name: '3D1D7F8E4C2CB82A1082F7BA0C9D8A57',
        visiblity: false,
        type: 'EPT_CutPolygonModifier'
      },
      {
        iD: 'E8EE614B4027217FB348A5AAFF978FE5',
        index: 11,
        parentIndex: 3,
        name: '安庆02',
        visiblity: false,
        type: 'EPT_Scene'
      },
      {
        iD: 'E52DD8754211B1EC380C08A6C786DFE8',
        index: 12,
        parentIndex: 2,
        name: '影像',
        visiblity: false,
        type: 'EPT_Folder'
      },
      {
        iD: 'EDCC7862463D08BDB92779B1A3957F7D',
        index: 13,
        parentIndex: 12,
        name: '安庆影像',
        visiblity: false,
        type: 'EPT_Scene'
      },
      {
        iD: 'E2C443DA49B9C2272E3CFD833A31DF09',
        index: 14,
        parentIndex: 12,
        name: '安庆市',
        visiblity: false,
        type: 'EPT_Tag'
      },
      {
        iD: 'E843E8834DE99DF1BDF3ECAA2CBD3328',
        index: 15,
        parentIndex: 2,
        name: '精模',
        visiblity: false,
        type: 'EPT_Folder'
      },
      {
        iD: '065DAD274DC801D41EBC96858E84C923',
        index: 16,
        parentIndex: 15,
        name: '安庆水面',
        visiblity: false,
        type: 'EPT_Scene'
      },
      {
        iD: 'F5CB7469443F7553CC268E8AC0229D3F',
        index: 17,
        parentIndex: 15,
        name: '植被',
        visiblity: false,
        type: 'EPT_Scene'
      },
      {
        iD: '89DA8CB242B09CB493B0AD9678469C2D',
        index: 18,
        parentIndex: 15,
        name: '小品',
        visiblity: false,
        type: 'EPT_Scene'
      },
      {
        iD: '8589B51243228D76A2F2588FD13E092B',
        index: 19,
        parentIndex: 15,
        name: '建筑',
        visiblity: false,
        type: 'EPT_Scene'
      },
      {
        iD: 'CBDA85EE4AD0C6618F2BA09EEAE08292',
        index: 20,
        parentIndex: 15,
        name: '地面',
        visiblity: false,
        type: 'EPT_Scene'
      },
      {
        iD: 'BBF71A63417E2B2EA301D3B184BFD7F9',
        index: 21,
        parentIndex: 15,
        name: '道路',
        visiblity: false,
        type: 'EPT_Scene'
      },
      {
        iD: '8E73435646634BDF48361D99A09CFCB2',
        index: 22,
        parentIndex: 1,
        name: '桥梁模型',
        visiblity: false,
        type: 'EPT_Folder'
      },
      {
        iD: '340800_aqbridge008',
        index: 23,
        parentIndex: 22,
        name: '港口沟中桥',
        visiblity: false,
        type: 'EPT_Scene'
      },
      {
        iD: '340800_aqbridge016',
        index: 24,
        parentIndex: 22,
        name: '振风大道2号桥',
        visiblity: false,
        type: 'EPT_Scene'
      },
      {
        iD: '6A4C0D464F34DF12EEA0C0B020AA3B6C',
        index: 25,
        parentIndex: 1,
        name: '科技风',
        visiblity: false,
        type: 'EPT_Folder'
      },
      {
        iD: '83AA19F6468C6924120E23886B28C590',
        index: 26,
        parentIndex: 25,
        name: 'AnQing',
        visiblity: false,
        type: 'EPT_Scene'
      },
      {
        iD: '799FD0134E523C9C28E4EC8B559176DC',
        index: 27,
        parentIndex: 0,
        name: '安徽省',
        visiblity: false,
        type: 'EPT_Folder'
      },
      {
        iD: 'DF5151FF44B40E9B63BB30A0C66B1916',
        index: 28,
        parentIndex: 27,
        name: '安徽省',
        visiblity: false,
        type: 'EPT_Scene'
      },
      {
        iD: '36B1B468462BFE99240F7FB9A93F3463',
        index: 29,
        parentIndex: 27,
        name: '安徽省地面',
        visiblity: false,
        type: 'EPT_Scene'
      }
    ]
    function listToTree (list) {
      const mapGroup = {}
      list.forEach((item) => {
        if (!mapGroup['parentIndex' + item.parentIndex]) mapGroup['parentIndex' + item.parentIndex] = []
        mapGroup['parentIndex' + item.parentIndex].push(item)
      })

      list.forEach((item) => {
        if (mapGroup['parentIndex' + item.index]) {
          item.children = mapGroup['parentIndex' + item.index]
        }
      })

      return mapGroup.parentIndex0
    }

    const tree = listToTree(data2)
    console.log('tree', tree)

    function createPanelWin () {
      useCreatePanel({

      }).then((result) => {
        console.log('result', result)
      }).catch((err) => {
        console.log('err', err)
      })
    }

    return {
      data2,
      listToTree,
      createPanelWin
    }
  }
})
</script>

<style scoped>

</style>
