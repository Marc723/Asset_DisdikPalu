import { Label, TextInput, Select, Button } from "flowbite-react"

const BasicForm = () => {
  return (
    <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words">
      <h5 className="card-title">Form Inventaris Barang</h5>
      <div className="mt-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-4">
            {[
              { id: "kodeBarang", label: "Kode Barang" },
              { id: "jenisBarang", label: "Jenis/Nama Barang" },
              { id: "noRegister", label: "No Register" },
              { id: "merkType", label: "Merk/Type" },
              { id: "ukuran", label: "Ukuran/CC" },
              { id: "bahan", label: "Bahan" },
              { id: "tahunPembelian", label: "Tahun Pembelian" },
              { id: "pabrik", label: "Pabrik" },
              { id: "noRangka", label: "No Rangka" },
            ].map(({ id, label }) => (
              <div key={id}>
                <Label htmlFor={id} value={label} className="mb-2 block" />
                <TextInput id={id} type="text" required className="form-control form-rounded-xl" />
              </div>
            ))}
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-4">
            {[
              { id: "noMesin", label: "No Mesin" },
              { id: "noPolisi", label: "No Polisi" },
              { id: "noBpkb", label: "No BPKB" },
            ].map(({ id, label }) => (
              <div key={id}>
                <Label htmlFor={id} value={label} className="mb-2 block" />
                <TextInput id={id} type="text" required className="form-control form-rounded-xl" />
              </div>
            ))}

            {/* Asal Usul (Select) */}
            <div>
              <Label htmlFor="asalUsul" value="Asal Usul" className="mb-2 block" />
              <Select id="asalUsul" required className="select-rounded">
                <option value="">Pilih Asal Usul</option>
                <option>Pembelian</option>
                <option>Hibah</option>
                <option>Pelaksanaan Perjanjian/Kontrak</option>
                <option>Ketentuan Peraturan</option>
                <option>Putusan Pengadilan</option>
                <option>Hasil Divestasi Penyertaan Modal</option>
              </Select>
            </div>

            {/* Harga */}
            <div>
              <Label htmlFor="harga" value="Harga" className="mb-2 block" />
              <TextInput id="harga" type="text" required className="form-control form-rounded-xl" />
            </div>

            {/* Kondisi (Select) */}
            <div>
              <Label htmlFor="kondisi" value="Kondisi" className="mb-2 block" />
              <Select id="kondisi" required className="select-rounded">
                <option value="">Pilih Kondisi</option>
                <option>Baik</option>
                <option>Kurang Baik</option>
                <option>Rusak Berat</option>
                <option>Hilang</option>
                <option>Tidak Ditemukan</option>
                <option>Lainnya</option>
              </Select>
            </div>

            {/* Nama & Jabatan Pemegang */}
            {[
              { id: "namaPemegang", label: "Nama Pemegang" },
              { id: "jabatanPemegang", label: "Jabatan Pemegang" },
            ].map(({ id, label }) => (
              <div key={id}>
                <Label htmlFor={id} value={label} className="mb-2 block" />
                <TextInput id={id} type="text" required className="form-control form-rounded-xl" />
              </div>
            ))}
          </div>

          <div className="col-span-12 flex gap-3 mt-4">
            <Button color={'primary'}>Submit</Button>
            <Button color={'error'}>Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicForm
