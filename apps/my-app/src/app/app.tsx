import { useState } from 'react'
import { Tabs } from '@my-app/ui'

export function App() {
  const [tab, setTab] = useState('tab-1')

  return (
    <div>
      <Tabs value={tab} onChange={setTab} className="mb-24">
        <Tabs.Item value="tab-1" label="Section 1" />
        <Tabs.Item value="tab-2" label="Section 2" />
        <Tabs.Item value="tab-3" label="Section 3" />
      </Tabs>
      <p hidden={tab != 'tab-1'} className="px-16">
        Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin
        molestie malesuada. Nulla porttitor accumsan tincidunt. Curabitur
        aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam
        vehicula elementum sed sit amet dui. Proin eget tortor risus. Donec
        rutrum congue leo eget malesuada. Sed porttitor lectus nibh. Vestibulum
        ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla
        porttitor accumsan tincidunt.
      </p>
      <p hidden={tab != 'tab-2'} className="px-16">
        Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet
        quam vehicula elementum sed sit amet dui. Praesent sapien massa,
        convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus.
        Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Donec
        rutrum congue leo eget malesuada. Sed porttitor lectus nibh.
        Pellentesque in ipsum id orci porta dapibus. Curabitur non nulla sit
        amet nisl tempus convallis quis ac lectus.
      </p>
      <p hidden={tab != 'tab-3'} className="px-16">
        Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit
        amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere
        blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac
        lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at
        tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
        Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non
        nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue
        leo eget malesuada.
      </p>
    </div>
  )
}

export default App
